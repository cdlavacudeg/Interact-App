import * as React from "react";
import "@styles/studentprofesorlist.css";
import imgprofile from "@img/imgprofile.png";

function ProfesorStudentList({list}) {
    console.log(list)
    const {listStudents,listTeachers} = list
    return (
        <section className="profileProfesorStudentList">
            <article>
                <h2 className="h2-profile">Mis Profesores</h2>
                <ul className="ulprofesor">
                    {listTeachers ?(
                        listTeachers.map((e,index)=>{
                            return(
                                <li className="liprofesor" key={index}>
                                    <img
                                        className="imagenprofile"
                                        src={imgprofile}
                                        alt="imgprofile"
                                    />
                                    {e.fullName.split(' ').slice(0,2).join(' ')}
                                    <br/>
                                    <span className="courseprofesor">{e.course.split(' ').slice(0,2).join(' ')}</span>
                                </li>
                            )
                        })
                    ):(
                        <></>
                    )}

                </ul>
            </article>
            <article>
                <h2 className="h2-profile">Mis Compañeros</h2>
                <ul className="ulprofesor">
                    {listStudents ? listStudents.map((e,index)=>{
                            return(
                                <li className="listudent" key={index}>
                                <img
                                    className="imagenprofile"
                                    src={imgprofile}
                                    alt="imgprofile"
                                />
                                {e.split(' ')[0]}
                            </li>
                            )
                    }):(
                        <></>
                    )

                    }

                </ul>
            </article>
        </section>
    );
}
export default ProfesorStudentList;
