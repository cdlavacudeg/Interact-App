import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions";
import homeSVG from "@icons/home.svg";
import materiasSVG from "@icons/courses.svg";
import calificacionesSVG from "@icons/clasification.svg";
import perfilSVG from "@icons/profile.svg";
import contactoSVG from "@icons/contact.svg";
import logoutSVG from "@icons/logout.svg";
import backArrowSVG from "@icons/back-arrow.svg";
import "@styles/navBar.css";



const NavBar = ({show, change}) => {

    const isActive = show ? 'show' : ' '
    const dispatch = useDispatch();
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: homeSVG,
        },
        {
            path: "/materias",
            name: "Mis Materias",
            icon: materiasSVG,
        },
        {
            path: "/calificaciones",
            name: "Mis Calificaciones",
            icon: calificacionesSVG,
        },
        {
            path: "/perfil",
            name: "Mi Perfil",
            icon: perfilSVG,
        },
        {
            path: "/contacto",
            name: "Contacto",
            icon: contactoSVG,
        },
        // {
        //     path: "/logout",
        //     name: "Cerrar Sesión",
        //     icon: logoutSVG
        // },
    ];
    const handleLogout = () => {
        dispatch(logout());
        window.localStorage.setItem("loggedAppUser", JSON.stringify({}));
    };
    return (
        <nav className={`header-nav ${isActive}`}>
            <button onClick={change} className="header-backarrow">
                <img src={backArrowSVG} alt="back arrow" />
            </button>
            <ul className="header-nav-list">
                {menuItem.map((item) => (
                    <li className="header-nav-item" key={item.name}>
                        <NavLink className="header-nav-link" to={item.path}>
                            <div className="header-nav-img">
                                <img src={item.icon} alt={item.name} />
                            </div>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            <li className="header-nav-item" >
                    <button id='logout' className='header-nav-link' onClick={handleLogout} to={"/"}>
                        <div className="header-nav-img">
                        <img  src={logoutSVG} alt="Cerrar Sesión" />
                        </div>
                        Cerrar Sesión
                    </button>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;
