import React from "react";
import "@styles/commentImputs.css";
import Modal from "../components/Modal";
import WarningCloseSession from "../components/Forms/WarningCloseSession";
import { useSelector } from "react-redux";

function CommentImputs() {
    const activeModal = useSelector((state) => state.modal);
    return (
        <div className="contenedor_mensaje">
            <h3 className="contep">Mensaje</h3>
            <div className="" id="">
                <textarea
                    name=""
                    id=""
                    cols="50"
                    rows="7"
                    placeholder="Escriba un mensaje"
                ></textarea>
            </div>
            {activeModal.active && (
                <Modal>
                    {activeModal.name === "Warning Close Session" && (
                        <WarningCloseSession />
                    )}
                </Modal>
            )}
        </div>
    );
}

export default CommentImputs;
