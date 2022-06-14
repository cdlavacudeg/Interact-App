import { NavLink } from "react-router-dom";
import "@styles/Admitabs.css";

const AdminTabs = () => {
    return (
        <div className="AdminId-info">
            <ul className="AdminId-list">
                <li className="AdminId-item">
                    <button className="button_listAdmin">
                        {" "}
                        <NavLink to={"/admin/Teacher"}>Profesores</NavLink>
                    </button>
                </li>
                <li className="AdminId-item">
                    <button className="button_listAdmin">
                        <NavLink to={"/admin/Student"}>Alumnos</NavLink>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AdminTabs;
