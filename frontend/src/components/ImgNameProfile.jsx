import * as React from "react";
import "@styles/imgnameprofile.css";
import imagProfile from "@img/imgprofile.png";
import { useSelector } from "react-redux";

function ImgNameProfile() {
    const user = useSelector((state) => state.user);
    return (
        <section>
            <h1 className="h1-miperfil"> Mi Perfil</h1>
            <div className="section-img-name-perfil">
                <img
                    className="img-name-perfil"
                    src={imagProfile}
                    alt="img de perfil"
                />
                <h1 className="h1-name-perfil">{user.user.fullName}</h1>
            </div>
        </section>
    );
}
export default ImgNameProfile;
