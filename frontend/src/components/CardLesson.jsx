import "@styles/cardLesson.css";
import { useDispatch, useSelector } from "react-redux";
import trashimg from "@icons/trash.svg";
import editimg from "@icons/editpen.svg";
import { showModal } from "../redux/actions";
import logoPlus from "@icons/PlusButton.svg";
import { useState } from "react";
import Modal from "./Modal";
import AddLesson from "./Forms/AddLesson";
import { useParams } from "react-router-dom";
import UpdateLesson from "./Forms/UpdateLesson";
import DeleteLesson from "./Forms/DeleteLesson";
import WarningCloseSession from "./Forms/WarningCloseSession";

const CardLesson = () => {
    let lectures = useSelector((state) => state.course.lessons.lectures);
    const { materiaId } = useParams();
    const user = useSelector((state) => state.user);
    const activeModal = useSelector((state) => state.modal);
    const [itemData, setItemData] = useState({});
    const dispatch = useDispatch();

    const handleDelete = (lecture, index, course_id, token) => {
        dispatch(showModal("Delete Lesson"));
        setItemData({ lecture, index, course_id, token });
    };

    const handleAdd = (token, course_id) => {
        dispatch(showModal("Add Lesson"));
        setItemData({ token, course_id });
    };

    const handleUpdate = (lecture, index, course_id, token) => {
        dispatch(showModal("Update Lesson"));
        setItemData({ lecture, index, course_id, token });
    };
    return (
        <>
            <div className="accordion" id="accordionExample">
                {lectures.length != 0 ? (
                    lectures.map((lecture, index) => {
                        return (
                            <div className="accordion-item" key={index}>
                                <h2
                                    className="accordion-header"
                                    id={`heading${index + 2}`}
                                >
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index + 2}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse${index + 2}`}
                                    >
                                        <h3 className="accordionh3">
                                            {" "}
                                            {lecture.title}
                                        </h3>
                                    </button>
                                    {user.user.role == "teacher" && (
                                        <div className="icons">
                                            <div
                                                className="trash-icon"
                                                onClick={() =>
                                                    handleDelete(
                                                        lecture,
                                                        index,
                                                        materiaId,
                                                        user.token
                                                    )
                                                }
                                            >
                                                <img
                                                    src={trashimg}
                                                    alt="trash icon"
                                                />
                                            </div>
                                            <div
                                                className="edit-icon"
                                                onClick={() =>
                                                    handleUpdate(
                                                        lecture,
                                                        index,
                                                        materiaId,
                                                        user.token
                                                    )
                                                }
                                            >
                                                <img
                                                    src={editimg}
                                                    alt="trash icon"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </h2>
                                <div
                                    id={`collapse${index + 2}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`heading${index + 2}`}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <div className="cardLesson-video">
                                            <iframe
                                                className="cardLesson-video"
                                                src={lecture.link}
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <h5>No hay material disponible</h5>
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
                        {activeModal.name === "Delete Lesson" && (
                            <DeleteLesson data={itemData} />
                        )}
                        {activeModal.name === "Add Lesson" && (
                            <AddLesson data={itemData} />
                        )}
                        {activeModal.name == "Update Lesson" && (
                            <UpdateLesson data={itemData} />
                        )}
                        {activeModal.name === "Warning Close Session" && (
                            <WarningCloseSession />
                        )}
                    </Modal>
                )}
            </div>
        </>
    );
};

export default CardLesson;
