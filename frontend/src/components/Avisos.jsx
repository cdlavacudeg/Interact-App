import * as React from "react";
import { useState } from "react";
import avisosimg from "@img/img-avisos.png";
import "@styles/avisos.css";

function Avisos() {

    const [avisos, setAvisos] = useState(3)
    const [btn, setbtn] = useState(1)

    const avisosAll = [
        {
            institucion: "que se yo",
            aviso: "Tu hermana se cayo por el balcon",
            fecha: "02-05-22"
        },
        {
            institucion: "que se yo",
            aviso: "Tu tio se cayo por el balcon",
            fecha: "02-05-22"
        },
        {
            institucion: "que se yo",
            aviso: "Tu gato se cayo por el balcon",
            fecha: "02-05-22"
        },
        {
            institucion: "que se yo",
            aviso: "Tu hermana se cayo por el balcon",
            fecha: "02-05-22"
        },
        {
            institucion: "que se yo",
            aviso: "Tu tio se cayo por el balcon",
            fecha: "02-05-22"
        },
        {
            institucion: "que se yo",
            aviso: "Tu gato se cayo por el balcon",
            fecha: "02-05-22"
        },
    ]

    const verMas = () => {
        if (btn === 1) {
            setAvisos(100)
            setbtn(2)
        } else {
            setAvisos(3)
            setbtn(1)
        }
    }

    return (
        <section className="sectionAvisos">
            <h2 className="h2-avisos"> Avisos</h2>
            <ul className="ul-avisos">

                {
                    avisosAll.map((item, index) => index < avisos && (
                        <li key={index} className="avisos-li">

                            <img className="avisosimg" src={avisosimg} alt="avisos img" />
                            <article>
                                <ul className="ul-avisos">
                                    <li className="institucion-aviso">{item.institucion}</li>
                                    <li className="fecha-aviso">{item.fecha}</li>
                                    <li className="descripcion-aviso">{item.aviso}</li>
                                </ul>
                            </article>

                        </li>
                    ))
                }
               
                    <button onClick={() => verMas()} className="btn_second">{btn === 1 ? 'Ver mas' : 'Ver menos'}</button>
             
            </ul>
        </section>

    )
}

export default Avisos;