import { useEffect } from "react";
import style from "@styles/GradestableStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGrade } from "../redux/actions";

function GradesTable({ grades }) {
    return (
        <section className="bg-light p-2">
            <div className={style.table_responsive} id="no-more-tables">
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
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default GradesTable;
