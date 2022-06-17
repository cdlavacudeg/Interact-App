import React from "react";
import CommentImput from "../components/CommentImput";
import "@styles/comment.css";
import { useDispatch } from "react-redux";
import { hideModal } from "../redux/actions";
import toast, { Toaster } from "react-hot-toast";
import "@styles/alert.css";


function Comment() {

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success(`Mensaje enviado`, {
            duration: 5000,
            className: "success",
        });
        dispatch(hideModal()).catch((error) => console.log(error));

    };


    return (
        <div className="container_principal">
              <Toaster position="top-right" reverseOrder={true} />
            <h1 className="titulo">Contacto</h1>
            <p className="parrafo">
                Si tienes alguna duda o necesitas mas informaci&oacute;n no
                dudes en contactarnos!
            </p>
            <div className="container_commentImput">
                <CommentImput />
                <button onClick={handleSubmit} className="btn_second" type="submit">
                    Enviar
                </button>
            </div>
        </div>
    );
}

export default Comment;
