import "@styles/cardActivity.css";
import { useDispatch, useSelector } from "react-redux";
import trashimg from "@icons/trash.svg";
import editimg from "@icons/editpen.svg";
import { showModal } from "../redux/actions";
import logoPlus from "@icons/PlusButton.svg";
import { useState } from "react";
import Modal from "./Modal";
import AddActivity from "./Forms/AddActivity";
import { useParams } from "react-router-dom";
// import UpdateActivity from "./Forms/UpdateLesson";
import DeleteActivity from "./Forms/DeleteActivity";

const CardActivity = () => {
    let events = useSelector((state) => state.course.events);
    const user = useSelector((state) => state.user);
    const { materiaId } = useParams();
    const activeModal = useSelector((state) => state.modal);
    const [itemData, setItemData] = useState({});
    const dispatch = useDispatch();

    const handleDelete = ( index, events, course_id, token) => {
        dispatch(showModal("Delete Activity"));
        setItemData({events, index, course_id, token });
    };

    const handleAdd = (token, course_id) => {
        dispatch(showModal("Add Activity"));
        setItemData({ token, course_id });
    };

    const handleUpdate = (lecture, index, course_id, token) => {
        dispatch(showModal("Update Activity"));
        setItemData({ lecture, index, course_id, token });
    };

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
                            {user.user.role == "teacher" && (
                                <div className="icons">
                                    <div
                                        className="trash-icon"
                                        onClick={() =>
                                            handleDelete(
                                                index,
                                                event,
                                                materiaId,
                                                user.token
                                            )
                                        }
                                    >
                                        <img src={trashimg} alt="trash icon" />
                                    </div>
                                    <div
                                        className="edit-icon"
                                        onClick={() =>
                                            handleUpdate(
                                                index,
                                                event,
                                                materiaId,
                                                user.token
                                            )
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
            {user.user.role == "teacher" && (
                <div className="plusUser">
                    <img
                        onClick={() => handleAdd(user.token, materiaId)}
                        className="plusUser__imgPlusLogo"
                        src={logoPlus}
                        alt=""
                    />
                </div>
            )}
            {activeModal.active && (
                <Modal>
                    {activeModal.name === "Delete Activity" && (
                        <DeleteActivity data={itemData} />
                    )}
                   {activeModal.name === "Add Activity" && (
                        <AddActivity data={itemData} />
                    )}
                   {/*   {activeModal.name == "Update Lesson" && (
                        <UpdateActivity data={itemData} />
                    )} */}
                </Modal>
            )}
        </>
    );
};

export default CardActivity;
