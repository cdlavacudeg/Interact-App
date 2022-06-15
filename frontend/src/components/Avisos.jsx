import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotifications, showModal } from "../redux/actions";
import "@styles/avisos.css";
import avisosimg from "@img/img-avisos.png";
import trashimg from "@icons/trash.svg";
import logoPlus from "@icons/PlusButton.svg";
import Modal from "../components/Modal";
import DeleteNotification from "./Forms/DeleteNotification";
import AddNotification from "./Forms/AddNotification";

function Avisos() {
    const user = useSelector((state) => state.user);
    const avisosAll = useSelector((state) => state.notifications);
    const activeModal = useSelector((state) => state.modal);
    const [itemData, setItemData] = useState({});

    const qty = user.user.role == "admin" ? avisosAll.length : 3;
    const [avisos, setAvisos] = useState(qty || 10);
    const [btn, setbtn] = useState(1);

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

    const handleDelete = (item, id, token) => {
        dispatch(showModal("Delete Notification"));
        setItemData({
            item,
            id,
            token,
        });
    };

    const handleAdd = (token) => {
        dispatch(showModal("Add Notification"));
        setItemData({ token });
    };
    return (
        <section className="section-avisos">
            <h2 className="h2-avisos"> Avisos</h2>
            <ul className="container-avisos">
                {avisosAll ? (
                    avisosAll.map(
                        (item, index) =>
                            index < avisos && (
                                <div key={index} className="avisos-li">
                                    <div
                                        className={`avisosimg ${
                                            user.user.role !== "admin"
                                                ? "user"
                                                : " "
                                        }`}
                                    >
                                        <img src={avisosimg} alt="avisos img" />
                                    </div>

                                    <span
                                        className={`content-aviso ${
                                            user.user.role !== "admin"
                                                ? "user"
                                                : " "
                                        } `}
                                    >
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
                                    {user.user.role == "admin" && (
                                        <div
                                            className="trash-icon"
                                            onClick={() =>
                                                handleDelete(
                                                    item,
                                                    item.uid,
                                                    user.token
                                                )
                                            }
                                        >
                                            <img
                                                src={trashimg}
                                                alt="trash icon"
                                            />
                                        </div>
                                    )}
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
            {user.user.role == "admin" && (
                <div className="plusUser" onClick={() => handleAdd(user.token)}>
                    <img
                        className="plusUser__imgPlusLogo"
                        src={logoPlus}
                        alt=""
                    />
                </div>
            )}
            {activeModal.active && (
                <Modal activeModal={activeModal}>
                    {activeModal.name === "Delete Notification" && (
                        <DeleteNotification data={itemData} />
                    )}
                    {activeModal.name === "Add Notification" && (
                        <AddNotification data={itemData} />
                    )}
                </Modal>
            )}
        </section>
    );
}

export default Avisos;
