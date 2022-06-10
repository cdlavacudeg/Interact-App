import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "@styles/gradestable.css";
import { useEffect } from "react";
import {getGrade} from "../redux/actions";
import {useDispatch} from "react-redux";

function GradesTable() {

    const dispatch = useDispatch();
    const grades = useSelector((state) => state.grade) || {};
    const user = useSelector((state) => state.user);


    console.log(grades)
    useEffect(() => {
        dispatch(getGrade(user.user.uid)).catch((error) => {
            console.log(error);
        });
    }
    ,[dispatch, user.user.uid]);

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
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default GradesTable;
