import "@styles/useradmintable.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import logoPlus from "@icons/PlusButton.svg";

function StudentAdminTable() {
     const dispatch = useDispatch();
     const listUsers = useSelector((state) => state.users);
       const [activeModal, setActiveModal] = useState({
           active: false,
       });

    return (
        <div className="user-section">
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
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers.map((user) => {
                                let { fullName, gender, email, role } = user;
                                if (user.role === "student") {
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
        </div>
    );
}

export default StudentAdminTable;
