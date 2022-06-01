import * as React from "react";
import biologyimg from "@img/biologia.png";
import mathimg from "@img/Matematicas.png";
import geoimg from "@img/Geografia.png";
import "@styles/recentactivities.css";

function Recentactivities () {
    return (
        <section className="recent-activities">
            <h2 className="recent-activities-h2">Actividades Recientes</h2>
            <div className="recent-activities-container">
                <article className="recent-activities-item">
                    <div className="activities-notification">1</div>
                    <img src={biologyimg} alt="biology image" />
                    <h1>Biologia</h1>
                    <h2>Prof. Laura Valenzuela</h2>
                </article>
                <article className="recent-activities-item">
                    <div className="activities-notification">1</div>
                    <img src={mathimg} alt="math image" />
                    <h1>Matematica</h1>
                    <h2>Prof. Jorge Perez</h2>
                </article>
                <article className="recent-activities-item">
                    <div className="activities-notification">1</div>
                    <img src={geoimg} alt="geography image" />
                    <h1>Geografia</h1>
                    <h2>Prof. Andrea Marquez</h2>
                </article>
            </div>
        </section>
    )
}

export default Recentactivities;