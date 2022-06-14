import * as React from "react";
import "@styles/profesorlistmobile.css";
import imgprofile from "@img/imgprofile.png";

function StudentListMobile({ list }) {
    const { listTeachers, listStudents } = list;
    return (
        <section>
            <div className="accordion-mobile" id="accordionExample">
                <div className="accordion-item-mobile">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <h3 className="accordionh3">Mis Estudiantes</h3>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {/* Aca es donde va la lista de compañeros */}
                            <ul className="ulprofesor">
                                {listStudents ? (
                                    listStudents.map((e, index) => {
                                        return (
                                            <li
                                                className="listudent"
                                                key={index}
                                            >
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default StudentListMobile;
