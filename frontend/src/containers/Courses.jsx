import CoursesCard from "../components/CoursesCard";
import { useSelector, useDispatch } from "react-redux";
import "@styles/courses.css";

const Courses = () => {
    const materias = useSelector((state) => state.courses);

    return (
        <div className="courses">
            <h1 className="courses-title">Mis Materias</h1>

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
                <div></div>
            )}
        </div>
    );
};

export default Courses;
