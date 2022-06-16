import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, showModal } from "../redux/actions";
import Modal from "./Modal";
import DeleteUser from "./Forms/DeleteUser";
import AddUsers from "./Forms/AddUsers";
import logoPlus from "@icons/PlusButton.svg";
import "@styles/useradmintable.css";

function TeacherAdminTable() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const listUsers = useSelector((state) => state.users);
    const activeModal = useSelector((state) => state.modal);
    const [itemData, setItemData] = useState({});

    const handleModalDelete = () => {
        dispatch(showModal("Delete User"));
    };
    const handleModalPost = (token) => {
        dispatch(showModal("Post User"));
        let role = "teacher"
        setItemData({ token, role });
    };

    useEffect(() => {
        dispatch(getUsers()).catch((error) => console.log(error));
    }, []);

    return (
        <div className="user-section">
            <h1 className="listUser_title">Lista de Profesores</h1>
            <section className="bg-light p-2 user-section">
                <div className="table-responsive" id="no-more-tables">
                    <table className="table">
                        <thead>
                            <tr className="bg-color-honey">
                                <th>Nombre</th>
                                <th>Genero</th>
                                <th>Correo</th>
                                <th>Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers.map((user) => {
                                let { fullName, gender, email, role } = user;
                                if (user.role === "teacher") {
                                    return (
                                        <tr key={user.uid}>
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
                            <DeleteUser />
                        )}
                        {activeModal.name === "Post User" && (
                            <AddUsers data={itemData}/>
                        )}
                    </Modal>
                )}
                <button onClick={handleModalDelete} className="WarningModalButton">
                    Modal
                </button>
            </div>
        </div>
    );
}

export default TeacherAdminTable;
