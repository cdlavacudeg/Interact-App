const { Grade } = require('../models');
const { Types } = require('mongoose');
const response = require('../helpers/response.js');

const gradesGet = async (req, res) => {
    const grade = await Grade.find();
    response.success(req, res, 'get API - list of grades', { grade });
};

const gradesPost = async (req, res) => {
    const { student_id, grade: grade_b, date, obs } = req.body;
    const { course_id: id } = req.params;
    try {
        const grade = await Grade.findOne({ course_id: id });

        console.log(grade);

        let student_grades = grade.studentGrades.filter((e) =>
            Types.ObjectId(student_id).equals(e.student_id)
        );

        if (student_grades.length == 0) {
            console.log('push');
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
        console.error(`Error en userPost:${error}`);
        response.error(req, res, 'Error creating a grade');
    }
};

const gradesDelete = async (req, res) => {
    const { id } = req.params;
    const gradesDelete = await Grade.findByIdAndDelete(id);
    response.success(req, res, 'delete API - Grade deleted', {
        grade: gradesDelete,
    });
};

const gradesUpdate = async (req, res) => {
    const { course_id:id } = req.params;
    let {student_id, grade, date, obs,index}=req.body
    index = parseInt(index)
    try{

        const gradeUpdate = await Grade.findOne({ course_id: id});
        const studentGrades = gradeUpdate.studentGrades.filter((e)=>
            Types.ObjectId(student_id).equals(e.student_id)
        );
        console.log(gradeUpdate)
        if(!studentGrades) throw new Error("The student does'nt have grades registered")
        console.log(studentGrades)
        let newGrade = {
            grade:studentGrades[0].grades[index].grade,
            date:studentGrades[0].grades[index].date,
            obs:studentGrades[0].grades[index].obs
        }
        if(grade) newGrade.grade = grade
        if(date) newGrade.date = date
        if(obs) newGrade.obs = obs

        gradeUpdate.studentGrades = gradeUpdate.studentGrades.map((e)=>{
            if(e.student_id == student_id){
                e.grades[index]=newGrade
            }
            return e
        })

        const result = await gradeUpdate.save()

        response.success(req, res, 'put API - Grade updated', { grade:result });
    }catch(error){
        console.log(`Error un userPut:${error}`)
        response.error(req,res,'Error updating a grade, check the values')
    }
};



const gradesGetById = async (req, res) => {
    const { id } = req.params;
    const grade = await Grade.findById(id);
    response.success(req, res, 'get API - Grade by id', { grade });
};

module.exports = {
    gradesGet,
    gradesPost,
    gradesDelete,
    gradesUpdate,
    gradesGetById,
};
