import * as React from "react";
import "@styles/gradestable.css";

function GradesTable () {
    return (
        
        <section className="bg-light p-5 container-width-gradestables">
            <h1> Mis Calificaciones</h1>
            <div className="table-responsive" id="no-more-tables">
                <table className="table">
                    <thead>
                        <tr className="bg-color-honey">
                            <th>Materia</th>
                            <th>Fecha</th>
                            <th>Tipo de evaluacion</th>
                            <th>Calificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-title="Materia">Ingles</td>
                            <td data-title="Fecha">27/05/2022</td>
                            <td data-title="Tipo de evaluacion">Examen oral</td>
                            <td data-title="Calificación">8</td>
                        </tr>
                        <tr>
                            <td data-title="Materia">Biologia</td>
                            <td data-title="Fecha">27/05/2022</td>
                            <td data-title="Tipo de evaluacion">Examen escrito</td>
                            <td data-title="Calificación">6</td>
                        </tr>
                        <tr>
                            <td data-title="Materia">Historia</td>
                            <td data-title="Fecha">27/05/2022</td>
                            <td data-title="Tipo de evaluacion">Trabajo practico</td>
                            <td data-title="Calificación">4</td>
                        </tr>
                        <tr>
                            <td data-title="Materia">Historia</td>
                            <td data-title="Fecha">27/05/2022</td>
                            <td data-title="Tipo de evaluacion">Trabajo practico</td>
                            <td data-title="Calificación">7.50</td>
                        </tr>
                        <tr>
                            <td data-title="Materia">Matematica</td>
                            <td data-title="Fecha">27/05/2022</td>
                            <td data-title="Tipo de evaluacion">Examen escrito</td>
                            <td data-title="Calificación">9</td>
                        </tr>
                        <tr>
                            <td data-title="Materia">Fisico-quimica</td>
                            <td data-title="Fecha">27/05/2022</td>
                            <td data-title="Tipo de evaluacion">Examen escrito</td>
                            <td data-title="Calificación">8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </section>

    )
}

export default GradesTable;