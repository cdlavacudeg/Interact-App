import React from "react";

// // Styles
import "@styles/modal.css";

const Modal = ({ activeModal, children }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-content__title">{activeModal.name}</div>
                <div className="modal-content__body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
