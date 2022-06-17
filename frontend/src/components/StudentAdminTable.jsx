import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import DeleteUser from "./Forms/DeleteUser";
import AddUsers from "./Forms/AddUsers";
import UpdateUser from "./Forms/UpdateUser";
import logoPlus from "@icons/PlusButton.svg";
import trashSVG from "@icons/trash.svg";
import penSVG from "@icons/editpen.svg";
import backArrow from '@icons/back-arrow.svg';
import "@styles/useradmintable.css";

import WarningCloseSession from "./Forms/WarningCloseSession";

function StudentAdminTable() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const listUsers = useSelector((state) => state.users);
    const activeModal = useSelector((state) => state.modal);
    const [itemData, setItemData] = useState({});
    const navigate = useNavigate();

    const handleModalDelete = ( item, id, token) => {
        dispatch(showModal("Delete User"));
        setItemData({
            item,
            id,
            token,
        });
    };
    const handleModalPost = (token) => {
        dispatch(showModal("Post User"));
        let role = "student"
        setItemData({ token, role });
    };

    const handleModalUpdate = (item, id,token) => {
        dispatch(showModal("Update User"));
        let role = "student"
        setItemData({ item,id,token, role });
    };

    return (
        <div className="user-section">
            <div onClick={() => navigate(-1)} className="user-arrow">
                <img src={backArrow} alt="" />
            </div>
            <h1 className="listUser_title">Lista de Alumnos</h1>
            <section className="bg-light p-2 user-section">
                <div className="table-responsive" id="no-more-tables">
                    <table className="table">
                        <thead>
                            <tr className="bg-color-honey">
                                <th>Nombre</th>
                                <th>Genero</th>
                                <th>Correo</th>
                                <th>Rol</th>
                                <th>Operaciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers.map((item) => {
                                let { fullName, gender, email, role } = item;
                                if (item.role === "student") {
                                    return (
                                        <tr key={item.uid}>
                                            <td data-title="Nombre">
                                                {" "}
                                                {fullName}
                                            </td>
                                            <td data-title="Genero">
                                                {" "}
                                                {gender}{" "}
                                            </td>
                                            <td data-title="Correo">
                                                {" "}
                                                {email}{" "}
                                            </td>
                                            <td data-title="role"> {role} </td>
                                            <td data-title="operaciones" className="table-buttons">
                                              <button onClick={() =>
                                                    handleModalDelete(
                                                        item,
                                                        item.uid,
                                                        item.token
                                                    )}
                                                    className="trash-button"
                                                    >
                                                <img src={trashSVG} alt="delete button"  />
                                              </button>
                                              <button onClick={() =>
                                                    handleModalUpdate(
                                                        item,
                                                        item.uid,
                                                        item.token
                                                    )}
                                              className="edit-button">
                                                <img src={penSVG} alt="edit pen button" />
                                              </button>
                                            </td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
            <div onClick={() => handleModalPost(user.token)} className="plusUser">
                <img className="plusUser__imgPlusLogo" src={logoPlus} alt="" />
            </div>
            <div>
                {activeModal.active && (
                    <Modal>
                        {activeModal.name === "Delete User" && (
                            <DeleteUser data={itemData}/>
                        )}
                        {activeModal.name === "Post User" && (
                            <AddUsers data={itemData}/>
                        )}
                        {activeModal.name === "Update User" && (
                            <UpdateUser data={itemData}/>
                        )}
                        {activeModal.name === "Warning Close Session" && (
                            <WarningCloseSession />
                        )}
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default StudentAdminTable;
