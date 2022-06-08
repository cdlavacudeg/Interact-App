import CoursesCard from "../components/CoursesCard";
import biologia from "@img/biologia.png";
import Geografia from "@img/Geografia.png";
import Historia from "@img/Historia.png";
import Informatica from "@img/Informatica.png";
import Ingles from "@img/Ingles.png";
import Literatura from "@img/Literatura.png";
import Matematicas from "@img/Matematicas.png";
import FisicoQuimica from "@img/Fisico-Quimica.png";
import { useSelector, useDispatch } from "react-redux";
import "@styles/courses.css";

const Courses = () => {
    const materias = useSelector((state) => state.courses);

    console.log(materias[0].courseName)


    return (
        <div className="courses">
            <h1 className="courses-title">Mis Materias</h1>
            {materias.map((item) => {
                <CoursesCard
                    name={item.courseName}
                    image={item.image}
                    nameProf={item.teacher.fullName}
                    key={item._id}
                />;
            })}
        </div>
    );
};

export default Courses;
