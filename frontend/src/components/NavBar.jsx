import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import homeSVG from "@icons/home.svg";
import materiasSVG from "@icons/courses.svg";
import calificacionesSVG from "@icons/clasification.svg";
import perfilSVG from "@icons/profile.svg";
import contactoSVG from "@icons/contact.svg";
import { showModal } from "../redux/actions";
import logoutSVG from "@icons/logout.svg";
import backArrowSVG from "@icons/back-arrow.svg";
import "@styles/navBar.css";
import Modal from "./Modal";
import WarningCloseSession from "./Forms/WarningCloseSession";

const NavBar = ({ show, close }) => {
    const user = useSelector((state) => state.user);
    const isActive = show ? "show" : " ";

    const dispatch = useDispatch();
    let menuItem = [
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
    ];

    if (user.user.role == "teacher") {
        menuItem = [
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
                path: "/perfil",
                name: "Mi Perfil",
                icon: perfilSVG,
            },
            {
                path: "/contacto",
                name: "Contacto",
                icon: contactoSVG,
            },
        ];
    }

    if (user.user.role == "admin") {
        menuItem = [
            {
                path: "/",
                name: "Home",
                icon: homeSVG,
            },
            {
                path: "/materias",
                name: "Materias",
                icon: materiasSVG,
            },
            {
                path: "/admin",
                name: "Usuarios",
                icon: perfilSVG,
            },
            {
                path: "/contacto",
                name: "Mensajes",
                icon: contactoSVG,
            },
        ];
    }
    const handleWarnings = (event) => {
        event.preventDefault();
        dispatch(showModal("Warning Close Session"));
    };

    return (
        <nav className={`header-nav ${isActive}`}>
            <button onClick={close} className="header-backarrow">
                <img src={backArrowSVG} alt="back arrow" />
            </button>
            <ul className="header-nav-list">
                {menuItem.map((item) => (
                    <li className="header-nav-item" key={item.name}>
                        <NavLink
                            onClick={close}
                            className="header-nav-link"
                            to={item.path}
                        >
                            <div className="header-nav-img">
                                <img src={item.icon} alt={item.name} />
                            </div>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
                <li className="header-nav-item">
                    <button
                        id="logout"
                        className="header-nav-link"
                        onClick={handleWarnings}
                    >
                        <div className="header-nav-img">
                            <img src={logoutSVG} alt="Cerrar Sesión" />
                        </div>
                        Cerrar Sesión
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
