import * as React from "react";
import "@styles/profesorlist.css";
import imgprofesor from "@img/imgprofesor.png";

function ProfesorList () {
    return ( 
        <section>
            <h2>Mis Profesores</h2>
            <ul>
                <li> <img src={imgprofesor} alt="imgprofesor" />  Ramona</li>
                <li> <img src={imgprofesor} alt="imgprofesor" /> Jose</li>
                <li> <img src={imgprofesor} alt="imgprofesor" />  Eugenia</li> 
                <li> <img src={imgprofesor} alt="imgprofesor" /> Octavio</li>
            </ul>
        </section>
        

    )
}
export default ProfesorList;