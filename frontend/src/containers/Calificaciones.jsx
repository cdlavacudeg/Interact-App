import * as React from "react";
import GradesTable from "../components/GradesTable";
// import '@styles/gradestable.css';

function GradesTables() {
    return (
        <div>
            <h1 className="calificaciones"> Mis Calificaciones</h1>
            <GradesTable />
        </div>
    );
}

export default GradesTables;
