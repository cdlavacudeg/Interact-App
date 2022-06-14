import * as React from "react";
import welcomeimg from "@img/welcome-img.svg";
import "@styles/welcomeuser.css";
import { useSelector } from "react-redux";

function WelcomeUser() {
    const user = useSelector((state) => state.user) || "";
    const name = user.user.fullName;
    const gender = user.user.gender;
    const rol = user.user.role
    console.log(rol)
    return (
        <section className="welcome">
            <div className="welcome-user">
                <h2 className="welcome-title">
                    ¡{gender === "female" ? "Bienvenida" : "Bienvenido"},{" "}
                    {name.split(" ")[0]}!
                </h2>
                <p className="welcome-body">
                    {" "}
                    ¿{gender === "female" ? "Lista" : "Listo"} para seguir {" "}
                     {rol === "student" ? "aprendiendo" : "enseñando" } hoy?
                </p>
            </div>
            <div className="welcome-img">
                <img src={welcomeimg} alt="" />
            </div>
        </section>
    );
}

export default WelcomeUser;
