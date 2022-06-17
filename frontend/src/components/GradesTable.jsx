import "@styles/Gradestable.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import logoPlus from "@icons/PlusButton.svg";
import trashimg from "@icons/trash.svg";
import editimg from "@icons/editpen.svg";
import { useState } from "react";
import { showModal } from "../redux/actions";
import Modal from "./Modal";
import AddGrade from "./Forms/AddGrade";
import DeleteGrade from "./Forms/DeleteGrade";
import UpdateGrade from "./Forms/UpdateGrade";
import WarningCloseSession from "./Forms/WarningCloseSession";

function GradesTable({ grades ,students}) {
    const user = useSelector(state=>state.user);
    const { materiaId } = useParams();
    const activeModal = useSelector((state) => state.modal);
    const [itemData, setItemData] = useState({});
    const dispatch = useDispatch();

    const handleAdd = (token, course_id,student_list) => {
        dispatch(showModal("Add Grade"));
        setItemData({ token, course_id ,student_list});
    };
    const handleDelete = ( grade, course_id,token) => {
        dispatch(showModal("Delete Grade"));
        setItemData({grade,course_id,token})
    };
    const handleUpdate = (grade,index,course_id, token) => {
        dispatch(showModal("Update Grade"));
        setItemData({gradeData:grade,index,course_id,token})
    };
    return (
        <section className="bg-light table-container">
            <div className="table-responsive" id="no-more-tables">
                <table className="table">
                    <thead>
                        <tr className="bg-color-honey">
                            <th>{user.user.role == 'teacher'?'Estudiante':'Materia'}</th>
                            <th>Fecha</th>
                            <th>Tipo de evaluacion</th>
                            <th>Calificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map((item, index) => (
                            <tr key={index}>
                                <td data-title={user.user.role == 'teacher'?'Estudiante':'Materia'}>
                                {user.user.role =='teacher'?item.student:item.course}
                                </td>
                                <td data-title="Fecha">{item.date}</td>
                                <td data-title="Tipo de evaluacion">
                                    {item.obs}
                                </td>
                                <td className="grade" data-title="Calificación">
                                    <span className="grade-note">{item.grade}</span>
                                    {user.user.role == "teacher" && (
                                        <div className="icons">
                                            <div
                                                className="trash-icon"
                                                onClick={() => handleDelete(item,materiaId,user.token)}
                                            >
                                                <img
                                                    src={trashimg}
                                                    alt="trash icon"
                                                />
                                            </div>
                                            <div
                                                className="edit-icon"
                                                onClick={() => handleUpdate(item,index,materiaId,user.token)}
                                            >
                                                <img
                                                    src={editimg}
                                                    alt="trash icon"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {grades.length == 0 ? (
                    <h4>Calificaciones no disponibles</h4>
                ) : (
                    <></>
                )}

            </div>
            {user.user.role == "teacher" && (
                    <div className="plusUser">
                        <img
                            onClick={() =>
                                handleAdd(user.token, materiaId,students)
                            }
                            className="plusUser__imgPlusLogo"
                            src={logoPlus}
                            alt=""
                        />
                    </div>
                )}
                {activeModal.active && (
                    <Modal>
                        {activeModal.name === "Delete Grade" && (
                            <DeleteGrade data={itemData} />
                        )}
                        {activeModal.name === "Add Grade" && (
                            <AddGrade data={itemData} />
                        )}
                        {activeModal.name == "Update Grade" && (
                            <UpdateGrade data={itemData} />
                        )}
                        {activeModal.name === "Warning Close Session" && (
                            <WarningCloseSession />
                        )}
                    </Modal>
                )}
        </section>
    );
}

export default GradesTable;
