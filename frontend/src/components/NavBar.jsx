import React from 'react'
import homeSVG from '@icons/home.svg'
import materiasSVG from '@icons/courses.svg'
import calificacionesSVG from '@icons/clasification.svg'
import perfilSVG from '@icons/profile.svg'
import contactoSVG from '@icons/contact.svg'
import logoutSVG from '@icons/logout.svg'
import "@styles/navBar.css"




const NavBar = () => {

    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: homeSVG
        },
        {
            path: "/materias",
            name: "Materias",
            icon: materiasSVG
        },
        {
            path: "/calificaciones",
            name: "Calificaciones",
            icon: calificacionesSVG
        },
        {
            path: "/perfil",
            name: "Perfil",
            icon: perfilSVG
        },
        {
            path: "/contacto",
            name: "Contacto",
            icon: contactoSVG
        },
        {
            path: "/",
            name: "Cerrar Sesión",
            icon: logoutSVG
        },


    ]

  return (
    <nav className="header-nav">
        <ul className="header-nav-list">
            {menuItem.map(item => (
                <li className="header-nav-item" key={item.name}>
                    <a className="header-nav-link" href={item.path}>
                        <div className="header-nav-img">
                        <img  src={item.icon} alt={item.name} />
                        </div>
                        {item.name}
                    </a>
                </li>
            ))}       
        </ul>
    </nav>
  )
}

export default NavBar