import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotifications } from "../redux/actions";
import '@styles/avisos.css';
import avisosimg from "@img/img-avisos.png";

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
        <section className='section-avisos'>
            <h2 className='h2-avisos'> Avisos</h2>
            {avisosAll ? (
                avisosAll.map(
                    (item, index) =>
                        index < avisos && (
                            <li key={index} className='avisos-li'>
                                <img
                                    className='avisosimg'
                                    src={avisosimg}
                                    alt="avisos img"
                                />
                                <article>
                                    <ul className='ul-avisos'>
                                        <li className='institucion-aviso'>
                                            {item.title}
                                        </li>
                                        <li className='fecha-aviso'>
                                            {item.date}
                                        </li>
                                        <li className='descripcion-aviso'>
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
        </section>
    );
}

export default Avisos;
