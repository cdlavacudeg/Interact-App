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
import { getCourses } from "../redux/actions"

// const materias = [
//     {
//         materia: "Biologia",
//         nameProf: "Prof. Laura Valenzuela",
//         img: biologia,
//     },
// ];
function Recentactivities() {
    const materias = useSelector((state)=>state.courses);
    const user = useSelector((state)=> state.user.user)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCourses(user.uid))
            .catch(error=>{
                console.log(error)
            })
    },[])

    return (
        <section className="recent-activities pt-5 pb-4">
            <h2 className="recent-activities-h2 ">Actividad Reciente</h2>
            <div className="recent-activities-container">
                <div className="row">
                    {materias?
                       ( materias.map(
                        (item, index) =>
                            index < 3 && (
                                <div key={index} className="col-6 col-lg-4">
                                    <article className="recent-activities-item mb-3">
                                        <div className="activities-notification">
                                            1
                                        </div>
                                        <img
                                            src={item.img}
                                            alt={item.materia}
                                        />
                                        <div className="p-2">
                                            <h1>{item.materia}</h1>
                                            <h2>{item.nameProf}</h2>
                                        </div>
                                    </article>
                                </div>
                            )
                        )):(
                            <div>
                            <p> No tienes materias registradas</p>
                            </div>)
                    }

                </div>
            </div>
        </section>
    );
}

export default Recentactivities;
