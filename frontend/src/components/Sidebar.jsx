import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import exit from '@img/exit.png'
import home from '@img/home.png'
import materias from '@img/materias.png'
import calificaciones from '@img/calificaciones.png'
import perfil from '@img/perfil.png'
import contacto from '@img/contacto.png'
import logo from '@img/logo.png'
import menu from '@img/menu.png'

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const toggleMain = () => setIsOpen(false);
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: home
        },
        {
            path: "/materias",
            name: "Mis materias",
            icon: materias
        },
        {
            path: "/calificaciones",
            name: "Mis calificaciones",
            icon: calificaciones
        },
        {
            path: "/perfil",
            name: "Mi Perfil",
            icon: perfil
        },
        {
            path: "/contacto",
            name: "Contacto",
            icon: contacto
        },


    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar">
                <div className="top_section">
                    <img style={{ display: isOpen ? "block" : "none" }} className="logo" src={logo} alt="logo" />
                    <div style={{ display: isOpen ? "none" : "block", marginLeft: isOpen ? "0" : "5px" }} className="bars">

                        <img onClick={toggle} src={menu} alt="menu" />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (

                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon"><img src={item.icon} alt={item.name} /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>

                    ))
                }
                <div style={{ marginTop: '120px' }} >
                    <NavLink to='/fgfgg' className="link" activeclassName="active">
                        <div className="icon"><img src={exit} alt="" /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Cerrar sesion</div>
                    </NavLink>
                </div>
            </div>
            <main onClick={() => toggleMain()}>{children}</main>
        </div>
    );
};

export default Sidebar;