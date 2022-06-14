import * as React from "react";
import "@styles/studentprofesorlist.css";
import imgprofile from "@img/imgprofile.png";

function StudentList({ list }) {
    const { listStudents, listTeachers } = list;
    return (
        <section className="profileProfesorStudentList">
            <article>
                <h2 className="h2-profile">Mis Estudiantes</h2>
                <ul className="ulprofesor">
                    {listStudents ? (
                        listStudents.map((e, index) => {
                            return (
                                <li className="listudent" key={index}>
                                    <img
                                        className="imagenprofile"
                                        src={imgprofile}
                                        alt="imgprofile"
                                    />
                                    {e.split(" ")[0]}
                                </li>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </ul>
            </article>
        </section>
    );
}
export default StudentList;
