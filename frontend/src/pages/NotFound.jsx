import React from "react";
import '@styles/notfound.css';
import notfound from '@img/notfound.png';
import logo from '@img/logo.png';

const NotFound = () => {
    return (
        <>
            <div className="main_404">
                <img className="logo_404" src={logo} alt="logo" />
                <div className="content_404">
                    <img className="img_404" src={notfound} alt="notfound" />
                    <p className="p_404">Pagina no encontrada</p>
                    <button className="btn_primary btn_404">Volver a la pagina principal</button>
                </div>

            </div>
        </>
    );
};

export default NotFound;
