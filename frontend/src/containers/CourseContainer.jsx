import { useParams, Outlet } from "react-router-dom";
import CourseTabs from "../components/CourseTabs";
import biologiaImg from "@img/biologia.jpeg";
import CourseIdActivity from '@components/CourseIdActivity'
import '@styles/courseContainer.css'


const CourseContainer = () => {
    const { materiaId } = useParams();
  return (
    <section className="courseId">
        <div className="courseId-img">
            <img src={biologiaImg} alt="imagen de la materia" />
        </div>
        <h1 className="courseId-title">Biología</h1>
        <CourseTabs params={materiaId}/>
            <Outlet/>
    </section>
  )
}

export default CourseContainer
