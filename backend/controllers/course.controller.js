const { Course, Lesson, Grade, User } = require('../models');
const {Types}= require('mongoose');
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
    let { courseName, image, description , teacher, students } = req.body;
    const oldCourse = await Course.findById(id)

    let newCourse={}

    if(courseName) newCourse.courseName=courseName;
    if(image) newCourse.image=image;
    if(description) newCourse.description=description;

    teacher=Types.ObjectId(teacher)

    if(teacher && !teacher.equals(oldCourse.teacher)){
        const newTeacher = await User.findById(teacher)
        const oldTeacher = await User.findById(oldCourse.teacher)

        oldTeacher.courses=oldTeacher.courses.filter(course=> !course.equals(oldCourse._id))
        newTeacher.courses.push(oldCourse._id)
        newTeacher.courses=newTeacher.courses.map(e=>e.toString())
        newTeacher.courses=[...new Set(newTeacher.courses)]

        await newTeacher.save();
        await oldTeacher.save();

        newCourse.teacher=teacher;
    }

    students=[...new Set(students)]
    // The new students array that are not include in the old one.
    students= students.map(e=>Types.ObjectId(e))
    let newStudents= students.filter(student=> !oldCourse.students.includes(student))
    let exit_students=oldCourse.students.filter(student => !students.includes(student))

    console.log(newStudents)
    console.log("----------------")
    console.log(exit_students)
    console.log('--------------')
    console.log(students && JSON.stringify(students)!== JSON.stringify(exit_students))

    if(newStudents && JSON.stringify(students)!== JSON.stringify(exit_students)){
        exit_students.map(async (student)=>{
            const oldStudent= await User.findById(student)
            oldStudent.courses=oldStudent.courses.filter(course => !course.equals(oldCourse._id))
            await oldStudent.save()
        })

        newStudents.map(async (student)=>{
            const newStudent = await User.findById(student)
            newStudent.courses.push(oldCourse._id)
            newStudent.courses=newStudent.courses.map(e=>e.toString())
            newStudent.courses =[...new Set(newStudent.courses)]
            await newStudent.save()
        })

        newCourse.students=students
    }



    const course = await Course.findByIdAndUpdate(id,newCourse, { new: true });
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
    const course = await Course.findById(id)
            .populate({ path: 'lessons', select: 'lectures' })
            .populate({ path: 'grades', select: 'studentGrades' })
            .exec();

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
