import "@styles/useradmintable.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import React, { useState } from "react";
import logoPlus from "@icons/PlusButton.svg";
import logo from "../assets/images/logo.png";

function TeacherAdminTable() {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.users);

    //Modal
    const [show, setShow] = useState(false);
    const handleModalClose = () => {

        setShow(false);
    };

    const handleModalOpen = () => {
        setShow(true);
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
            <div className="plusUser">
                <img className="plusUser__imgPlusLogo" src={logoPlus} alt="" />
            </div>
            <div>
                            <div
                                hidden={!show}
                            >
                                <div
                                    className="modalWarningBackground"
                                    
                                >
                                    <div className="modalWarningCard">
                                        <div style={{display: 'flex'}}><img className="logoWarningModal" src={logo} alt="" /></div>
                                        <div className="modalWarningBody">
                                            <div>
                                                <p className="warningMargin">
                                                <strong>¿Querés eliminar este usuario?</strong>
                                                </p>
                                                <p className="pSoftColorWarning">
                                                Estás por eliminar al usuario Nombre y Apellido de forma permanente y ya no tendrá acceso a la plataforma 
                                                </p>
                                            </div>
                                            <button className="btn_primary mt-2"> <strong>Eliminar Usuario</strong></button>
                                            <button className="cancelarWarningButton btn_primary mt-2" onClick={handleModalClose} ><strong>Cancelar</strong>  </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <button

                                onClick={handleModalOpen}
                                className="WarningModalButton"
                            >
                                Modal
                            </button>
                        </div>
        </div>
    );
}

export default TeacherAdminTable;



