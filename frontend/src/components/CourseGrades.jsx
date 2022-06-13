import React from "react";
import { useSelector } from "react-redux";
import GradesTable from "./GradesTable";

const CourseGrades = () => {
    const course = useSelector((state) => state.course);
    const user = useSelector((state) => state.user.user);
    let list = [];
    if (course.grades.studentGrades) {
        let gradesList = course.grades.studentGrades.filter(
            (objGrade) => objGrade.student_id === user.uid
        )[0];

        if (gradesList) {
            gradesList.grades.map((e) =>
                list.push(
                    Object.assign(e, {
                        course: course.courseName,
                    })
                )
            );
        }
    }

    return <GradesTable grades={list} />;
};

export default CourseGrades;
