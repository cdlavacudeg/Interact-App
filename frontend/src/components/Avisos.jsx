import * as React from "react";
import avisosimg from "@img/img-avisos.png";
import "@styles/avisos.css";

function Avisos () {
    return (
        <section className="sectionAvisos">
            <h2 className="h2-avisos"> Avisos</h2>
            <ul className="ul-avisos">
                <li className="avisos-li">
                    <img className="avisosimg" src={avisosimg} alt="avisos img" />
                    <article>
                        <ul className="ul-avisos">
                            <li className="institucion-aviso">Institucion</li>
                            <li className="fecha-aviso">02-05-22</li>
                            <li className="descripcion-aviso">Tu hermana se cayo por el balcon</li>
                        </ul>
                    </article>
                </li>
                <li className="avisos-li">
                    <img className="avisosimg" src={avisosimg} alt="avisos img" />
                    <article>
                        <ul className="ul-avisos">
                            <li className="institucion-aviso">Institucion</li>
                            <li className="fecha-aviso">22-05-22</li>
                            <li className="descripcion-aviso">Tu tia se cayo por el balcon</li>
                        </ul>
                    </article>
                </li>
                <li className="avisos-li">
                    <img className="avisosimg" src={avisosimg} alt="avisos img" />
                    <article>
                        <ul className="ul-avisos">
                            <li className="institucion-aviso">Institucion</li>
                            <li className="fecha-aviso">27-05-22</li>
                            <li className="descripcion-aviso">Tu suegra se cayo por el balcon</li>
                        </ul>
                    </article>
                </li>
                
            </ul>

        </section>

    )
}

export default Avisos;