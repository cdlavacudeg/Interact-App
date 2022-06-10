import CoursesCard from "../components/CoursesCard";
import { useSelector, useDispatch } from "react-redux";
import inglesSVG from "@img/Ingles.png";
import "@styles/courses.css";

const Courses = () => {
    const materias = useSelector((state) => state.courses);

    return (
        <div className="courses">
            <h1 className="courses-title">Mis Materias</h1>
            <section className="courses-container">
                {materias ? (
                    materias.map((item) => {
                        return (
                            <CoursesCard
                                name={item.courseName}
                                image={item.image}
                                nameProf={item.teacher.fullName}
                                key={item._id}
                                id={item._id}
                            />
                        );
                    })
                ) : (
                    <div>No hay materias</div>
                )}
            </section>
        </div>
    );
};

export default Courses;
