import { useParams } from "react-router-dom";
import biologiaImg from "@img/biologia.png";
import '@styles/courseContainer.css'


const CourseContainer = () => {
    const { materiaId } = useParams();
  return (
    <section className="courseId">
        <div className="courseId-img">
            <img src={biologiaImg} alt="imagen de la materia" />
        </div>
        <h1 className="courseId-title">Biologia</h1>
    </section>
  )
}

export default CourseContainer
