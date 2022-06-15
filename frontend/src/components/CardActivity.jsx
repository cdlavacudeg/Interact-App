import "@styles/cardActivity.css";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNotifications, showModal } from "../redux/actions";
import avisosimg from "@img/img-avisos.png";
import trashimg from "@icons/trash.svg";
import editimg from "@icons/editpen.svg";
import logoPlus from "@icons/PlusButton.svg";
import Modal from "../components/Modal";
import DeleteNotification from "./Forms/DeleteNotification";
import AddNotification from "./Forms/AddNotification";
import UpdateNotification from "./Forms/UpdateNotification";

const CardActivity = () => {
    let events = useSelector((state) => state.course.events);
        const user = useSelector((state) => state.user);
        const [itemData, setItemData] = useState({});


    const dispatch = useDispatch();

    if (events) {
        events = events.events.sort((a, b) => {
            let aDate = a.date.split("/");
            let bDate = b.date.split("/");

            aDate = new Date(aDate[2], parseInt(aDate[1]) - 1, aDate[0]);
            bDate = new Date(bDate[2], parseInt(bDate[1]) - 1, bDate[0]);

            return aDate - bDate;
        });
    } else {
        events = [];
    }
      useEffect(() => {
          dispatch(getNotifications()).catch((error) => {
              console.log(error);
          });
      }, []);

    const handleDelete = (item, id, token) => {
            dispatch(showModal("Delete Notification"));
            setItemData({
                item,
                id,
                token,
            });
        };

     const handleUpdate = (item, token) => {
         dispatch(showModal("Update Notification"));
         setItemData({ item, token });
     };


    return (
        <>
            {events.length != 0 ? (
                events.map((event, index) => {
                    return (
                        <div className="cardActivity" key={index}>
                            <div className="cardActivity-text">
                                <p className="cardActivity-title">
                                    {event.description}
                                </p>
                                <p className="cardActivity-body">
                                    Fecha limite: <span>{event.date}</span>
                                </p>
                            </div>
                            <p className="cardActivity-status">
                                {event.status ? "Pendiente" : "Entregado"}
                            </p>
                            {user.user.role == "admin" && (
                                <div className="icons">
                                    <div
                                        className="trash-icon"
                                        onClick={() =>
                                            handleDelete(
                                                event,
                                                event.uid,
                                                user.token
                                            )
                                        }
                                    >
                                        <img src={trashimg} alt="trash icon" />
                                    </div>
                                    <div
                                        className="edit-icon"
                                        onClick={() =>
                                            handleUpdate(event, user.token)
                                        }
                                    >
                                        <img src={editimg} alt="trash icon" />
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })
            ) : (
                <h5>No hay actividades disponibles</h5>
            )}
        </>
    );
};

export default CardActivity;
