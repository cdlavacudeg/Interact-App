import * as React from "react";
import "@styles/studentprofesorlist.css";
import imgprofile from "@img/imgprofile.png";

function ProfesorStudentList({list}) {
    console.log(list)
    return (
        <section className="profileProfesorStudentList">
            <article>
                <h2 className="h2-profile">Mis Profesores</h2>
                <ul className="ulprofesor">
                    {list ?(
                        list.map(e=>{
                            return(
                                <li className="liprofesor" key={e.teacher._id}>
                                    <img
                                        className="imagenprofile"
                                        src={imgprofile}
                                        alt="imgprofile"
                                    />
                                    {e.teacher.fullName.split(' ').slice(0,2).join(' ')}
                                    <br/>
                                    <span className="courseprofesor">{e.teacher.course.split(' ').slice(0,2).join(' ')}</span>
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
                    {list ? list.map(e=>{
                        return e.classmates.map(classmate=>{
                            return(
                                <li className="listudent" key={classmate._id}>
                                <img
                                    className="imagenprofile"
                                    src={imgprofile}
                                    alt="imgprofile"
                                />
                                {classmate.fullName.split(' ')[0]}
                            </li>
                            )
                        })
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
