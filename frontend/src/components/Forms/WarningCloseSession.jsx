import React from "react";
import logo from "../assets/images/logo.png";
import "@styles/modal.css";

const WarningCloseSession = ({children }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-img"><img  src={logo} alt="" /></div>
                <div className="modal-content__body">{children}
                <p className="pSoftColorWarning"> ¿Cerrar sesión?</p>
                <button className="btn_primary mt-2"><strong>Eliminar</strong></button>
                <button className="btn_primary mt-2 cancelarWarningButton">
                   <strong>Cancelar</strong> 
                </button></div>
            </div>
        </div>
    );
};

export default WarningCloseSession;