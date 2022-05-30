import React, { useState } from 'react';
import { NavLink, Router } from 'react-router-dom';
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
    const logout = () => {
       
            window.localStorage.removeItem('loggedAppUser')
            window.location.reload();
       
    }
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: home
        },
        {
            path: "/materias",
            name: "Materias",
            icon: materias
        },
        {
            path: "/calificaciones",
            name: "Calificaciones",
            icon: calificaciones
        },
        {
            path: "/perfil",
            name: "Perfil",
            icon: perfil
        },
        {
            path: "/contacto",
            name: "Contacto",
            icon: contacto
        },


    ]

    return (
        <div style={{ display: "flex" }}>

            <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar">
                <div className="top_section">
                    <a href="/"> <img style={{ display: isOpen ? "block" : "none" }} className="logo" src={logo} alt="logo" /></a>
                    <div style={{ display: isOpen ? "none" : "block", marginLeft: isOpen ? "0" : "5px" }} className="btn_toggle">

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
                <div style={{ marginTop: '60px' }} >
                    <div className="link btn_toggle" activeclassName="active" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className="icon"><img src={exit} alt="" /></div>
                        <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Cerrar sesion</div>
                    </div>
                </div>
            </div>

            <main onClick={() => toggleMain()}>{children}</main>

            <div className='calendar_section'>

                <p>Calendario Aqui</p>

        
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">¿Cerrar Sesion?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-footer ">
                            <div className='container'>
                            <div className='row'>
                            <button type="button" class="btn_primary col" data-bs-dismiss="modal">Cancelar</button>
                            <button style={{ marginLeft: "5px" }} type="button" class="btn_second col" onClick={logout}>Ok</button>
                            </div>
                            </div>
                           
                           
                        </div>
                    </div>
                </div>
            </div>
           
            
        </div>
    );
};

export default Sidebar;