const User = require('../models/user.model');
const Course = require('../models/course.model.js');
const bcryptjs = require('bcryptjs');
const { Types } = require('mongoose');
const response = require('../helpers/response.js');

const usersGet = async (req, res) => {
    const { limit, from } = req.query;
    const query = { status: true };

    try {
        const [total, user] = await Promise.all([
            await User.countDocuments(query),
            await User.find(query)
                .skip(Number(from))
                .limit(Number(limit))
                .populate([
                    {
                        path: 'courses',
                        model: 'Course',
                        select: 'courseName teacher image',
                        populate: {
                            path: 'teacher',
                            model: 'User',
                            select: 'fullName',
                        },
                    },
                ])
                .exec(),
        ]);

        response.success(req, res, 'get API - list of users', { total, user });
    } catch (error) {
        console.error(`Error in userGet:${error}`);
        response.error(req, res, 'Error getting list of users');
    }
};

const userPost = async (req, res) => {
    let { password, courses, fullName, email, role } = req.body;
    //Only unique values
    try {
        courses = [...new Set(courses)];

        const user = new User({
            password,
            courses,
            fullName,
            email,
            role,
        });

        if (courses) {
            courses.map(async (course) => {
                const courseObj = await Course.findById(course);

                if (user.role == 'teacher') {
                    const oldTeacher = await User.findById(courseObj.teacher);
                    if (oldTeacher) {
                        oldTeacher.courses = oldTeacher.courses.filter(
                            (id) => !id.equals(courseObj._id)
                        );
                        await oldTeacher.save();
                    }
                    courseObj.teacher = user._id;
                } else if (user.role == 'student') {
                    courseObj.students.push(user._id);
                } else {
                    user.courses = [];
                }

                await courseObj.save();
            });
        }
        //Encrypt password
        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(password, salt);

        //Save user in DB
        await user.save();
        response.success(req, res, 'post API - User created', { user });
    } catch (error) {
        console.error(`Error in userPost:${error}`);
        response.error(req, res, 'Error creating an user');
    }
};

const userPut = async (req, res) => {
    const { id } = req.params;
    let { password, role, courses, ...rest } = req.body;

    try {
        if (password) {
            const salt = bcryptjs.genSaltSync(10);
            rest.password = bcryptjs.hashSync(password, salt);
        }

        courses = [...new Set(courses)];

        const user_past = await User.findById(id);

        if (user_past.role == 'admin') {
            courses = [];
        }

        if (courses) {
            await Promise.all(
                user_past.courses.map(async (course) => {
                    const courseObj = await Course.findById(course);
                    if (user_past.role == 'teacher') {
                        courseObj.teacher = Types.ObjectId(0);
                    } else if (user_past.role == 'student') {
                        courseObj.students = courseObj.students.filter(
                            (student) => !student.equals(user_past._id)
                        );
                    }
                    await courseObj.save();
                })
            ).then(async () => {
                courses.map(async (course) => {
                    const courseObj = await Course.findById(course);
                    if (user_past.role == 'teacher') {
                        courseObj.teacher = user_past._id;
                    } else if (user_past.role == 'student') {
                        courseObj.students.push(user_past._id);
                    }

                    await courseObj.save();
                });
            });
        }

        const user = await User.findByIdAndUpdate(
            id,
            Object.assign({ courses }, rest),
            { new: true }
        );

        response.success(req, res, 'put API - User updated', { user });
    } catch (error) {
        console.error(`Error in userPut:${error}`);
        response.error(req, res, 'Error updating an user');
    }
};

const userDelete = async (req, res) => {
    const { id } = req.params;

    try {
        const user_past = await User.findById(id);
        let user;
        if (user_past.courses) {
            await Promise.all(
                user_past.courses.map(async (course) => {
                    const courseObj = await Course.findById(course);

                    if (user_past.role == 'teacher') {
                        courseObj.teacher = Types.ObjectId(0);
                    } else if (user_past.role == 'student') {
                        let students = courseObj.students.filter(
                            (student) => !student.equals(user_past._id)
                        );
                        courseObj.students = students;
                    }

                    await courseObj.save();
                })
            ).then((user = await User.findByIdAndDelete(user_past._id)));
        } else {
            user = await User.findByIdAndDelete(user_past._id);
        }

        response.success(req, res, 'delete API - User deleted', {
            user,
        });
    } catch (error) {
        console.error(`Error in userDelete:${error}`);
        response.error(req, res, 'Error deleting an user');
    }
};

const userGetById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id)
            .populate([
                {
                    path: 'courses',
                    model: 'Course',
                    select: 'courseName teacher image',
                    populate: {
                        path: 'teacher',
                        model: 'User',
                        select: 'fullName',
                    },
                },
            ])
            .exec();

        response.success(req, res, 'get API - User by id', { user });
    } catch (error) {
        console.error(`Error in userGetById:${error}`);
        response.error(req, res, 'Error getting users');
    }
};

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete,
    userGetById,
};
