import * as React from "react";
import { useEffect } from "react";
import biologia from "@img/biologia.png";
import Geografia from "@img/Geografia.png";
import Historia from "@img/Historia.png";
import Informatica from "@img/Informatica.png";
import Ingles from "@img/Ingles.png";
import Literatura from "@img/Literatura.png";
import Matematicas from "@img/Matematicas.png";
import FisicoQuimica from "@img/Fisico-Quimica.png";
import "@styles/recentactivities.css";
import CoursesCard from "./CoursesCard";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../redux/actions";

function Recentactivities() {
    const materias = useSelector((state) => state.courses);

    return (
        <section className="recent-activities pt-5 pb-4">
            <h2 className="recent-activities-h2 ">Actividad Reciente</h2>
            <div className="recent-activities-container">
                <div className="row">
                    {materias ? (
                        materias.map(
                            (item, index) =>
                                index < 3 && (
                                    <div key={index} className="col-6 col-lg-4">
                                        <article className="recent-activities-item mb-3">
                                            <div className="activities-notification">
                                                1
                                            </div>
                                            <img
                                                src={item.image}
                                                alt={item.courseName}
                                            />
                                            <div className="p-2">
                                                <h1>{item.courseName}</h1>
                                                <h2>{`Prof .${item.teacher.fullName}`}</h2>
                                            </div>
                                        </article>
                                    </div>
                                )
                        )
                    ) : (
                        <div>
                            <p> No tienes materias registradas</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Recentactivities;
