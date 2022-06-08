import React from "react";
import CommentImput from "../components/CommentImput";
import "@styles/comment.css";


function Comment () {
    return (
        <div className="container_principal">
            <h1 className="titulo">
                Contacto
            </h1>
            <p className="parrafo">
                Lorem ipsum dolor sit amet 
            </p>
            <div className="container_commentImput">
            <CommentImput />
            </div>
            
            <div className="container_button">
            <button type="submit">
                ENVIAR
            </button>
            </div>
          
        </div>
        
    )
}

    export default Comment

