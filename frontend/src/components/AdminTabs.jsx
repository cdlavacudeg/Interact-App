import { NavLink } from 'react-router-dom'
import '@styles/Admitabs.css'
import logoicon from"../assets/icons/undraw_teacher_re_sico 1.svg"
import welcomeimg from "@img/welcome-img.svg";



const AdminTabs = () => {
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
                     Profesores
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
                     Alumnos
                     </NavLink>
                  </button>
              </li>
          </ul>
      </div>
  );
}

export default AdminTabs;
