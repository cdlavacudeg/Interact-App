import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import avisosimg from "@img/img-avisos.png";
import "@styles/avisos.css";
import { useSelector, useDispatch } from "react-redux";
import { getNotifications } from "../redux/actions";

function Avisos() {
    const [avisos, setAvisos] = useState(3);
    const [btn, setbtn] = useState(1);

    const avisosAll = useSelector((state) => state.notifications);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotifications()).catch((error) => {
            console.log(error);
        });
    }, []);

    const verMas = () => {
        if (btn === 1) {
            setAvisos(avisosAll.length);
            setbtn(2);
        } else {
            setAvisos(3);
            setbtn(1);
        }
    };

    return (
        <section className="sectionAvisos">
            <h2 className="h2-avisos"> Avisos</h2>
            <ul className="ul-avisos">
                {avisosAll ? (
                    avisosAll.map(
                        (item, index) =>
                            index < avisos && (
                                <li key={index} className="avisos-li">
                                    <img
                                        className="avisosimg"
                                        src={avisosimg}
                                        alt="avisos img"
                                    />
                                    <article>
                                        <ul className="ul-avisos">
                                            <li className="institucion-aviso">
                                                {item.title}
                                            </li>
                                            <li className="fecha-aviso">
                                                {item.date}
                                            </li>
                                            <li className="descripcion-aviso">
                                                {item.content}
                                            </li>
                                        </ul>
                                    </article>
                                </li>
                            )
                    )
                ) : (
                    <div>
                        <p>No hay avisos </p>
                    </div>
                )}

                <button onClick={() => verMas()} className="btn_second">
                    {btn === 1 ? "Ver mas" : "Ver menos"}
                </button>
            </ul>
        </section>
    );
}

export default Avisos;
