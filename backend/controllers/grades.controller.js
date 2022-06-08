const { Grade } = require('../models');
const { Types } = require('mongoose');
const response = require('../helpers/response.js');

const gradesGet = async (req, res) => {
    try {
        const [total, grade] = await Promise.all([
            await Grade.countDocuments(),
            await Grade.find(),
        ]);
        response.success(req, res, 'get API - list of grades', {
            total,
            grade,
        });
    } catch (error) {
        console.error(`Error in gradesGet:${error}`);
        response.error(req, res, 'Error getting list of grades');
    }
};

const gradesPost = async (req, res) => {
    const { student_id, grade: grade_b, date, obs } = req.body;
    const { course_id: id } = req.params;
    try {
        const grade = await Grade.findOne({ course_id: id });

        let student_grades = grade.studentGrades.filter((e) =>
            Types.ObjectId(student_id).equals(e.student_id)
        );

        if (student_grades.length == 0) {
            grade.studentGrades.push({
                student_id,
                grades: [
                    {
                        grade: parseInt(grade_b),
                        date,
                        obs,
                    },
                ],
            });
        } else {
            grade.studentGrades = grade.studentGrades.map((e) => {
                if (e.student_id == student_id) {
                    e.grades.push({
                        grade: parseInt(grade_b),
                        date,
                        obs,
                    });
                }
                return e;
            });
        }

        const postgrade = await grade.save();
        response.success(req, res, 'post API - Grade created', {
            grade: postgrade,
        });
    } catch (error) {
        console.error(`Error in userPost:${error}`);
        response.error(req, res, 'Error creating a grade');
    }
};

const gradesDelete = async (req, res) => {
    const { course_id: id } = req.params;
    const { student_id } = req.body;
    try {
        const grade = await Grade.findOne({ course_id: id });
        grade.studentGrades = grade.studentGrades.filter(
            (e) => !Types.ObjectId(student_id).equals(e.student_id)
        );
        const gradeDelete = await grade.save();
        response.success(req, res, 'delete API - Grades of student deleted', {
            grade: gradeDelete,
        });
    } catch (error) {
        console.error(`Error in userDelete:${error}`);
        response.error(req, res, 'Error deleting a grade');
    }
};

const gradesUpdate = async (req, res) => {
    const { course_id: id } = req.params;
    let { student_id, grade, date, obs, index } = req.body;
    index = parseInt(index);
    try {
        const gradeUpdate = await Grade.findOne({ course_id: id });
        const studentGrades = gradeUpdate.studentGrades.filter((e) =>
            Types.ObjectId(student_id).equals(e.student_id)
        );
        if (studentGrades.length == 0) {
            throw new Error("The student does'nt have grades registered");
        }

        let newGrade = {
            grade: studentGrades[0].grades[index].grade,
            date: studentGrades[0].grades[index].date,
            obs: studentGrades[0].grades[index].obs,
        };
        if (grade) newGrade.grade = grade;
        if (date) newGrade.date = date;
        if (obs) newGrade.obs = obs;

        gradeUpdate.studentGrades = gradeUpdate.studentGrades.map((e) => {
            if (e.student_id == student_id) {
                e.grades[index] = newGrade;
            }
            return e;
        });

        const result = await gradeUpdate.save();

        response.success(req, res, 'put API - Grade updated', {
            grade: result,
        });
    } catch (error) {
        console.error(`Error in userPut:${error}`);
        response.error(req, res, `Error updating a grade: ${error.message}`);
    }
};

const gradesGetById = async (req, res) => {
    try {
        const { id } = req.params;
        const grade = await Grade.findById(id);
        response.success(req, res, 'get API - Grade by id', { grade });
    } catch (error) {
        console.error(`Error in gradesGetById:${error} `);
        response.error(req, res, 'Error getting grade');
    }
};

module.exports = {
    gradesGet,
    gradesPost,
    gradesDelete,
    gradesUpdate,
    gradesGetById,
};
