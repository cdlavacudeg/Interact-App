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
        <section className="recent_activities pt-5 pb-4">
            <h2 className="recent_activities_h2 ">Actividad Reciente</h2>
            <div className="recent_activities_container">
                <div className="row">
                {
                    materias.map((item, index) => index < 3 && (
                    <div key={index} className="col-6 col-lg-4">
                        <article className="recent_activities_item mb-3">
                            <div className="activities_notification">1</div>
                            <img src={item.img} alt={item.materia} />
                            <div className="p-2">
                                <h1>{item.materia}</h1>
                                <h2>{item.nameProf}</h2>
                            </div>
                        </article>
                    </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Recentactivities;