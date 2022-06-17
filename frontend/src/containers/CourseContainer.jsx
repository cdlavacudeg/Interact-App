import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getCourseById} from "../redux/actions";
import CourseTabs from "../components/CourseTabs";
import { useDispatch, useSelector } from "react-redux";
import "@styles/courseContainer.css";

const CourseContainer = () => {
    const [loading, setLoading] = useState(true);
    const { materiaId } = useParams();
    const course = useSelector((state) => state.course);
    const dispacht = useDispatch();

    useEffect(() => {
        setLoading(true);
        dispacht(getCourseById(materiaId))
            .then(() => {
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    window.localStorage.setItem("course", JSON.stringify(course));
    return (
        <section className="courseId">
            <div className="courseId-img">
                <img src={course.image} alt="imagen de la materia" />
            </div>
            <h1 className="courseId-title">
                {loading ? "" : course.courseName}
            </h1>
            <CourseTabs params={materiaId} />
            <Outlet />
        </section>
    );
};

export default CourseContainer;
