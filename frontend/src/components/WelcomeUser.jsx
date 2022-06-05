import * as React from "react";
import welcomeimg from "@img/welcome-img.svg";
import "@styles/welcomeuser.css"


const name = 'Juan';
const genre = 'masc';


function WelcomeUser () {
    return (
        <section className="welcome">
            <div className="welcome-user">
            <h1 className="welcome-title">¡{genre === 'fem' ? 'Bienvenida' : 'Bienvenido'}, {name}</h1>
            <p className="welcome-body"> ¿{genre === 'fem' ? 'Lista' : 'Listo'} para seguir aprendiendo hoy?</p>
            </div>
            <img className="welcome-img" src={welcomeimg} alt="" />
        </section>
    )
}

export default WelcomeUser;