import * as React from "react";
import welcomeimg from "@img/welcome-img.svg";
import style from "@styles/WelcomeUserStyle.module.css"


const name = 'Juan';
const gender = 'male';


function WelcomeUser () {
    return (
        <section className={style.welcome}>
            <div className={style.welcome_user}>
            <h1 className={style.welcome_title}>¡{gender === 'female' ? 'Bienvenida' : 'Bienvenido'}, {name}</h1>
            <p className={style.welcome_body}> ¿{gender === 'female' ? 'Lista' : 'Listo'} para seguir aprendiendo hoy?</p>
            </div>
            <img className={style.welcome_img} src={welcomeimg} alt="" />
        </section>
    )
}

export default WelcomeUser;