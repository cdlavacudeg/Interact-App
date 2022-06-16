import React from "react";
import { useSelector } from "react-redux";
import GradesTable from "./GradesTable";

const CourseGrades = () => {
    const course = useSelector((state) => state.course);
    const user = useSelector((state) => state.user.user);
    let list = [];
    if (course.grades.studentGrades) {
        let gradesList = []
        if(user.role == 'teacher'){
            gradesList=course.grades.studentGrades
        }else{
            gradesList = course.grades.studentGrades.filter(
            (objGrade) => objGrade.student_id._id === user.uid
            )[0];
        }

        if (gradesList) {
            if(user.role =='teacher'){
                gradesList.map(objStudent=>{
                    objStudent.grades.map(e=>{
                        list.push(
                            Object.assign(e,
                            {
                               student: objStudent.student_id.fullName,
                               student_id:objStudent.student_id._id
                            })
                        )
                    })
                })
            }else{
                gradesList.grades.map((e) =>
                list.push(
                    Object.assign(e, {
                        course: course.courseName,
                    })
                )
            );}
        }
    }

    return <GradesTable grades={list} students={course.students}/>;
};

export default CourseGrades;
