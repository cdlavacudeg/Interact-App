import * as React from "react";
import style from "@styles/GradestableStyle.module.css";


function GradesTable() {


    const materiasTest = [
        {
            materia: 'historia',
            fecha: '09/07/1995',
            tipo: 'Evaluacion',
            calificaciones: '10'
        }, {
            materia: 'ingles',
            fecha: '17/12/1991',
            tipo: 'Tarea',
            calificaciones: '8'
        },
    ]


    return (
        <section className="bg-light p-5">
            <div className='table-responsive' id="no-more-tables">
                <table className="table">
                    <thead>
                        <tr className={style.bg_color_honey}>
                            <th>Materia</th>
                            <th>Fecha</th>
                            <th>Tipo de evaluacion</th>
                            <th>Calificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            materiasTest.map((item, index) => (
                                <tr key={index}>
                                    <td data-title="Materia">{item.materia}</td>
                                    <td data-title="Fecha">{item.fecha}</td>
                                    <td data-title="Tipo de evaluacion">{item.tipo}</td>
                                    <td data-title="Calificación">{item.calificaciones}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>

    )
}

export default GradesTable;