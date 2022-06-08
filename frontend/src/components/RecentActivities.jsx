import * as React from "react";
import biologia from '@img/biologia.png'
import Geografia from '@img/Geografia.png'
import Historia from '@img/Historia.png'
import Informatica from '@img/Informatica.png'
import Ingles from '@img/Ingles.png'
import Literatura from '@img/Literatura.png'
import Matematicas from '@img/Matematicas.png'
import FisicoQuimica from '@img/Fisico-Quimica.png'
import "@styles/recentactivities.css";
import CoursesCard from "./CoursesCard";


const materias = [
    {
        materia: "Biologia",
        nameProf: "Prof. Laura Valenzuela",
        img: biologia
    },
    {
        materia: "FisicoQuimica",
        nameProf: "Prof. Mariela Hernandez",
        img: FisicoQuimica
    },
    {
        materia: "Geografia",
        nameProf: "Prof. Adriana Marquez",
        img: Geografia
    },
    {
        materia: "Historia",
        nameProf: "Prof. Pablo Mariani",
        img: Historia
    },
    {
        materia: "Informatica",
        nameProf: "Prof. Fernanda Sosa",
        img: Informatica
    },

    {
        materia: "Ingles",
        nameProf: "Prof. Montes de Oca",
        img: Ingles
    },
    {
        materia: "Literatura",
        nameProf: "Prof. Ramiro Flores",
        img: Literatura
    },
    {
        materia: "Matematicas",
        nameProf: "Prof. Jorge Perez",
        img: Matematicas
    },


]

function Recentactivities() {
    return (
        <section className="recent-activities pt-5 pb-4">
            <h2 className="recent-activities-h2 ">Actividad Reciente</h2>
            <div className="recent-activities-container">
                <div className="row">
                {
                    materias.slice(1, 4).map((item) => ( 
                   <CoursesCard  items={item} key={materias.materia}/>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Recentactivities;