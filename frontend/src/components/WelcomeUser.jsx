import * as React from "react";
import welcomeimg from "@img/welcome-img.svg";
import "@styles/welcomeuser.css"
function WelcomeUser () {
    return (
        <section className="welcome">
            <div className="welcome-user">
            <h1 className="welcome-title">¡Bienvenida, Gabriela!</h1>
            <p className="welcome-body"> ¿Lista para seguir aprendiendo hoy?</p>
            </div>
            <img className="welcome-img" src={welcomeimg} alt="" />
        </section>
    )
}

export default WelcomeUser;