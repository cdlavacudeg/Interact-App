import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNotification, getNotifications } from "../redux/actions";
import "@styles/avisos.css";
import avisosimg from "@img/img-avisos.png";
import trashimg from "@icons/trash.svg";

function Avisos() {
    const [avisos, setAvisos] = useState(3);
    const [btn, setbtn] = useState(1);
    const user = useSelector((state) => state.user);

    const avisosAll = useSelector((state) => state.notifications);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotifications())
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                if (user.user.role == "admin") {
                    setAvisos(avisosAll.length);
                }
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

    const handleDelete = (id,token)=>{
        dispatch(deleteNotification(id,token)).catch(error=>console.log(error))
    }
    console.log(avisosAll)
    return (
        <section className="section-avisos">
            <h2 className="h2-avisos"> Avisos</h2>
            <ul className="container-avisos">
            {avisosAll ? (
                avisosAll.map(
                    (item, index) =>
                        index < avisos && (

                            <div key={index} className="avisos-li">
                                <div className={`avisosimg ${user.user.role !=='admin'?'user':' '}`}>
                                    <img
                                        src={avisosimg}
                                        alt="avisos img"
                                    />
                                </div>

                                <span className={`content-aviso ${user.user.role !=='admin'?'user':' '} `}>
                                    <h6 className="titulo-aviso">
                                        {item.title}
                                    </h6>
                                    <p className="fecha-aviso">
                                        {item.date}
                                    </p>
                                    <p className="descripcion-aviso">
                                        {item.content}
                                    </p>
                                </span>
                                {user.user.role == 'admin' &&
                                (<div className="trash-icon" onClick={()=>handleDelete(item.uid,user.token)}>
                                    <img src={trashimg} alt='trash icon' />
                                </div>)}

                            </div>
                        )
                )
            ) : (
                <li>
                    <p>No hay avisos </p>
                </li>
            )}
            </ul>
            {user.user.role !== "admin" && (
                <button onClick={() => verMas()} className="btn_second">
                    {btn === 1 ? "Ver mas" : "Ver menos"}
                </button>
            )}
        </section>
    );
}

export default Avisos;
