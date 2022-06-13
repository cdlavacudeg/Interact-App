import { useParams, Outlet } from "react-router-dom";
import CourseTabs from "../components/CourseTabs";
import biologiaImg from "@img/biologia.jpeg";
import CourseIdActivity from "@components/CourseIdActivity";
import "@styles/courseContainer.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCourseById } from "../redux/actions";

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
    console.log(course)

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
