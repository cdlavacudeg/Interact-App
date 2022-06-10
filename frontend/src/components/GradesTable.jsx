<<<<<<< HEAD
import * as React from "react";


function GradesTable() {



=======
import { useEffect } from "react";
import style from "@styles/GradestableStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGrade } from "../redux/actions";

function GradesTable({ grades }) {
>>>>>>> 0efe0adc81c77893b0b16d50d8d3046a0a30d2cd
    return (
        <section className="bg-light p-5">
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
<<<<<<< HEAD
                        <tr>

                        </tr>
=======
                        {grades.map((item, index) => (
                            <tr key={index}>
                                <td data-title="Materia">{item.course}</td>
                                <td data-title="Fecha">{item.date}</td>
                                <td data-title="Tipo de evaluacion">
                                    {item.obs}
                                </td>
                                <td data-title="Calificación">{item.grade}</td>
                            </tr>
                        ))}
>>>>>>> 0efe0adc81c77893b0b16d50d8d3046a0a30d2cd
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default GradesTable;
