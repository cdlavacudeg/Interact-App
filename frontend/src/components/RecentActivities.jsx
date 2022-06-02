import * as React from "react";
import biologyimg from "@img/biologia.png";
import mathimg from "@img/Matematicas.png";
import geoimg from "@img/Geografia.png";
import "@styles/recentactivities.css";


function Recentactivities () {
    return (
        <section className="recent-activities pt-5 pb-4">
            <h2 className="recent-activities-h2">Actividad Reciente</h2>
            <div className="recent-activities-container">
                <div className="row">
                    <div className="col-6 col-lg-4">
                        <article className="recent-activities-item mb-3">
                            <div className="activities-notification">1</div>
                            <img src={biologyimg} alt="biology image" />
                            <div className="p-2">
                                <h1>Biologia</h1>
                                <h2>Prof. Laura Valenzuela</h2>
                            </div>
                        </article>
                    </div>
                    <div className="col-6 col-lg-4">
                        <article className="recent-activities-item mb-3">
                            <div className="activities-notification">1</div>
                            <img src={mathimg} alt="math image" />
                            <div className="p-2">
                                <h1>Matematica</h1>
                                <h2>Prof. Jorge Perez</h2>
                            </div>
                        </article>
                    </div>
                    <div className="col-6 col-lg-4">
                        <article className="recent-activities-item mb-3">
                            <div className="activities-notification">
                                <span className="text-center">1</span>
                            </div>
                            <img src={geoimg} alt="geography image" />
                            <div className="p-2">
                                <h1>Geografia</h1>
                                <h2>Prof. Andrea Marquez</h2>
                            </div>
                        </article>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Recentactivities;