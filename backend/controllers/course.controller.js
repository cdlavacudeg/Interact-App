const { Course, Lesson, Grade, User } = require('../models');

const coursesGet = async (req, res) => {
    const { limit, from } = req.query;

    const [total, courses] = await Promise.all([
        await Course.countDocuments(),
        await Course.find()
            .skip(Number(from))
            .limit(Number(limit))
            .populate({ path: 'lessons', select: 'lectures' })
            .populate({ path: 'grades', select: 'studentGrades' })
            .exec(),
    ]);

    res.json({
        total,
        courses,
    });
};

const coursePost = async (req, res) => {
    let { courseName, image, description, teacher, students } = req.body;

    try {
        const userTeacher = User.findById(teacher);
        userTeacher.courses = userTeacher.courses.push(teacher);
        await userTeacher.save();

        students = [...new Set(students)];
        if (students) {
            students.map(async (student) => {
                const userStudent = User.findById(student);
                userStudent.courses = userStudent.courses.push(student);
                await userStudent.save();
            });
        }

        const course = new Course({
            courseName,
            image,
            description,
            teacher,
            students,
        });

        const lesson = new Lesson({
            course_id: course._id,
            lectures: [],
        });

        const grade = new Grade({
            course_id: course._id,
            studentGrades: [],
        });

        course.lessons = lesson._id;
        course.grades = grade._id;

        await lesson.save();
        await grade.save();
        await course.save();

        res.json({
            msg: 'post API - Course created',
            course,
        });
    } catch (error) {
        console.error(`Error en coursePost:${error}`);
        res.json({
            msg: error.message,
        });
    }
};

const courseUpdate = async (req, res) => {
    const { id } = req.params;
    const { ...rest } = req.body;

    const course = await Course.findByIdAndUpdate(id, rest, { new: true });
    res.json({
        msg: 'put API - Course updated',
        course,
    });
};

const courseDelete = async (req, res) => {
    const { id } = req.params;

    const courseDel = await Course.findByIdAndDelete(id);
    res.json({
        msg: 'delete API - Course deleted',
        courseDel,
    });
};

//

const courseGetById = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id);
    res.json({
        course,
    });
};

// Get fullName of the students in the course
const courseGetStudents = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id)
        .populate('students', 'fullName')
        .exec();
    res.json({
        students: course.students,
    });
};

module.exports = {
    coursesGet,
    coursePost,
    courseUpdate,
    courseDelete,
    courseGetById,
    courseGetStudents,
};
