import * as React from "react";
import welcomeimg from "@img/welcome-img.svg";
import "@styles/welcomeuser.css"


const name = 'Juan';
const gender = 'male';


function WelcomeUser () {
    return (
        <section className="welcome">
            <div className="welcome-user">
            <h1 className="welcome-title">¡{gender === 'female' ? 'Bienvenida' : 'Bienvenido'}, {name}</h1>
            <p className="welcome-body"> ¿{gender === 'female' ? 'Lista' : 'Listo'} para seguir aprendiendo hoy?</p>
            </div>
            <div className="welcome-img">
            <img  src={welcomeimg} alt="" />
            </div>
        </section>
    )
}

export default WelcomeUser;
