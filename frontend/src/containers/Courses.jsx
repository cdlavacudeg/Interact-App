import CoursesCard from "../components/coursesCard"
import '@styles/courses.css'

const Courses = () => {
  return (
    <div className="courses">
        <h1 className="courses-title">Mis Materias</h1>
       <CoursesCard/>
    </div>
  )
}

export default Courses