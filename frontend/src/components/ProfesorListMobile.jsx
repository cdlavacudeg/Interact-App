import * as React from "react";
import "@styles/profesorlistmobile.css";
import imgprofile from "@img/imgprofile.png";


function ProfesorListMobile({list}) {
    const {listTeachers,listStudents}=list
    return (
        <section>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h3 className="accordionh3"> Mis Profesores</h3>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {/* Aca es donde va la lista de profesores */}
        <ul className="ulprofesor">
                    {listTeachers ? (
                        listTeachers.map((e, index) => {
                            return (
                                <li className="liprofesor" key={index}>
                                    <img
                                        className="imagenprofile border-bottom-black"
                                        src={imgprofile}
                                        alt="imgprofile"
                                    />
                                    {e.fullName
                                        .split(" ")
                                        .slice(0, 2)
                                        .join(" ")}
                                    <br />
                                    <span className="courseprofesor">
                                        {e.course
                                            .split(" ")
                                            .slice(0, 2)
                                            .join(" ")}
                                    </span>
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
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h3 className="accordionh3">Mis Compañeros</h3>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {/* Aca es donde va la lista de compañeros */}
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
      </div>
    </div>
  </div>
</div>
        </section>
    );
}
export default ProfesorListMobile;
