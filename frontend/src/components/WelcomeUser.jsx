import * as React from "react";
import welcomeimg from "@img/welcome-img.svg";
import style from "@styles/WelcomeUserStyle.module.css"
import { useSelector } from "react-redux";

function WelcomeUser() {
    const user = useSelector((state)=>state.user) || "";
    const name = user.user.fullName
    const gender = user.user.gender
    return (
        <section className={style.welcome}>
            <div className={style.welcome_user}>
                <h1 className={style.welcome_title}>
                    ¡{gender === "female" ? "Bienvenida" : "Bienvenido"}, {name.split(' ')[0]}!
                </h1>
                <p className={style.welcome_body}>
                    {" "}
                    ¿{gender === "female" ? "Lista" : "Listo"} para seguir
                    aprendiendo hoy?
                </p>
            </div>
            <div className={style.welcome_img}>
                <img src={welcomeimg} alt="" />
            </div>
        </section>
    );
}

export default WelcomeUser;
