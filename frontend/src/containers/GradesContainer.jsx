import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GradesTable from "../components/GradesTable";
import { getGrade } from "../redux/actions";
// import '@styles/gradestable.css';

function GradesTables() {
    const user = useSelector((state) => state.user);
    const grades = useSelector((state) => state.grades);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGrade(user.user.courses, user.user.uid)).catch((error) =>
            console.log(error)
        );
    }, []);

    return (
        <div>
            <h1 className="calificaciones"> Mis Calificaciones</h1>
            <GradesTable grades={grades} />
        </div>
    );
}

export default GradesTables;
