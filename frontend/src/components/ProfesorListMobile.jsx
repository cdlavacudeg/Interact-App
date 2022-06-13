import * as React from "react";
import "@styles/profesorlistmobile.css";
import imagProfile from "@img/imgprofile.png";


function ProfesorListMobile() {
    return (
        <section>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h3 className="accordionh3"> Mis Profesores</h3>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {/* Aca es donde va la lista de profesores */}
        <h3>ACA VA LA LISTA DE PROFES</h3>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h3 className="accordionh3">Mis Compañeros</h3>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {/* Aca es donde va la lista de compañeros */}
        <h3>ACA VA LA LISTA DE COMPAÑEROS</h3>
      </div>
    </div>
  </div>
</div>
        </section>
    );
}
export default ProfesorListMobile;