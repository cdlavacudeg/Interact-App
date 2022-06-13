import { NavLink } from 'react-router-dom'
import '@styles/courseTabs.css'


const AdminTabs = () => {
  return (
      <div className="courseId-info">
          <ul className="courseId-list">
              <li className="courseId-item">
                 <button> <NavLink to={"/admin/Teacher"}>Profesores</NavLink></button>
              </li>
              <li className="courseId-item">
                <button><NavLink to={"/admin/Student"}>Alumnos</NavLink></button>
              </li>
          </ul>
      </div>
  );
}

export default AdminTabs
