const User = require('../models/user.model');
const Course = require('../models/course.model.js');
const bcryptjs = require('bcryptjs');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
const response = require('../helpers/response.js');

const usersGet = async (req, res) => {
    const { limit, from } = req.query;
    const query = { status: true };

    const [total, user] = await Promise.all([
        await User.countDocuments(query),
        await User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
            .populate([
                {
                    path: 'courses',
                    model: 'Course',
                    select: 'courseName teacher',
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
};

const userPost = async (req, res) => {
    let { password, courses, fullName, email, role } = req.body;
    //Only unique values
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
};

const userPut = async (req, res) => {
    const { id } = req.params;
    let { password, role, courses, ...rest } = req.body;

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
        user_past.courses.map(async (course) => {
            const courseObj = await Course.findById(course);

            if (user_past.role == 'teacher') {
                courseObj.teacher = ObjectId(0);
            } else if (user_past.role == 'student') {
                let students = courseObj.students.filter(
                    (student) => student != id
                );
                courseObj.students = students;
            }

            await courseObj.save();
        });

        courses.map(async (course) => {
            const courseObj = await Course.findById(course);

            if (user_past.role == 'teacher') {
                courseObj.teacher = ObjectId(id);
            } else if (user_past.role == 'student') {
                courseObj.students.push(ObjectId(id));
            }

            await courseObj.save();
        });
    }

    const user = await User.findByIdAndUpdate(
        id,
        { courses, rest },
        { new: true }
    );

    response.success(req, res, 'put API - User updated', { user });
};

const userDelete = async (req, res) => {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, { status: false });
    const userAuthenticated = req.user;

    response.success(req, res, 'delete API - User deleted', {
        user,
        userAuthenticated,
    });
};

const userGetById = async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id)
        .populate([
            {
                path: 'courses',
                model: 'Course',
                select: 'courseName teacher',
                populate: {
                    path: 'teacher',
                    model: 'User',
                    select: 'fullName',
                },
            },
        ])
        .exec();

    response.success(req, res, 'get API - User by id', { user });
};

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete,
    userGetById,
};
