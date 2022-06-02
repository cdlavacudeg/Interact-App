import { useState } from 'react';
// import { NavLink, Router } from 'react-router-dom';
import exit from '@img/exit.png'
import home from '@img/home.png'
import materias from '@img/materias.png'
import calificaciones from '@img/calificaciones.png'
import perfil from '@img/perfil.png'
import contacto from '@img/contacto.png'
import logo from '@img/logo.png'
import menu from '@img/menu.png'


const Sidebar = ({children}) => {
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

        <div>

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

                            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                                <div className="icon"><img src={item.icon} alt={item.name} /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    <div style={{ marginTop: '60px' }} >
                        <div className="link btn_toggle" activeclassname="active" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="icon"><img src={exit} alt="" /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Cerrar sesion</div>
                        </div>
                    </div>
                </div>


                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-sm-12 col-md-9  col-12"> <main onClick={() => toggleMain()}>{children}</main></div>
                        <div  className="col-sm-12 col-md-3 col-12"><div className='calendar_section'>

                            <p>Calendario Aqui</p>


                        </div></div>
                    </div>

                </div>





                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">¿Cerrar Sesion?</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer ">
                                <div className='container'>
                                    <div className='row'>
                                        <button type="button" className="btn_primary col" data-bs-dismiss="modal">Cancelar</button>
                                        <button style={{ marginLeft: "5px" }} type="button" className="btn_second col" onClick={logout}>Ok</button>
                                    </div>
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