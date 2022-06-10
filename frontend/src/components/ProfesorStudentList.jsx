import * as React from "react";
import "@styles/studentprofesorlist.css";
import imgprofile from "@img/imgprofile.png";

function ProfesorStudentList() {
    return (
        <section className="profileProfesorStudentList">
            <article>
                <h2 className="h2-profile">Mis Profesores</h2>
                <ul className="ulprofesor">
                    <li className="liprofesor">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Andrea Marquez
                    </li>
                    <li className="courseprofesor"> Geografia</li>
                    <li className="liprofesor">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Emma Montes de Oca
                    </li>
                    <li className="courseprofesor"> Historia</li>
                    <li className="liprofesor">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Fernanda Sosa
                    </li>
                    <li className="courseprofesor"> Matematica</li>
                    <li className="liprofesor">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Jorge Perez
                    </li>
                    <li className="courseprofesor"> Ingles</li>
                </ul>
            </article>
            <article>
                <h2 className="h2-profile">Mis Compañeros</h2>
                <ul className="ulprofesor">
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Ana Paula Milani
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Brenda Lopez
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Diego Garcia
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Isabella Morelli
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Juliana Del Prats
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Kevin Bernal
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Lola Fuentes
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Lorenzo Ruiz Diaz
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Magdalena Novoa
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Melanie Coria
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Nicolas Bustos
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Jorge Perez
                    </li>
                    <li className="listudent">
                        {" "}
                        <img
                            className="imagenprofile"
                            src={imgprofile}
                            alt="imgprofile"
                        />{" "}
                        Jorge Peres
                    </li>
                </ul>
            </article>
        </section>
    );
}
export default ProfesorStudentList;
