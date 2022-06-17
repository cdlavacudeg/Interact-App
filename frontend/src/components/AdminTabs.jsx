import { NavLink } from "react-router-dom";
import "@styles/Admitabs.css";
import logoicon from "../assets/icons/undraw_teacher_re_sico 1.svg";
import welcomeimg from "@img/welcome-img.svg";
import Modal from "../components/Modal";
import WarningCloseSession from "../components/Forms/WarningCloseSession";
import { useSelector } from "react-redux";

const AdminTabs = () => {
    const activeModal = useSelector((state) => state.modal);

    return (
        <div className="Admin">
            <ul className="AdminId-list">
                <li className="AdminId-item">
                    <button className="button_listAdmin">
                        <NavLink to={"/admin/Teacher"}>
                            <img
                                className="AdminId_item__button_listAdmin"
                                src={logoicon}
                                alt=""
                            />
                            Editar Profesores
                        </NavLink>
                    </button>
                </li>
                <li className="AdminId-item">
                    <button className="button_listAdmin">
                        <NavLink to={"/admin/Student"}>
                            <img
                                className="AdminId_item__button_listAdmin"
                                src={welcomeimg}
                                alt=""
                                width="400px"
                            />
                            Editar Alumnos
                        </NavLink>
                    </button>
                </li>
            </ul>
            {activeModal.active && (
                <Modal>
                    {activeModal.name === "Warning Close Session" && (
                        <WarningCloseSession />
                    )}
                </Modal>
            )}
        </div>
    );
};

export default AdminTabs;
