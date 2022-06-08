import CoursesCard from "../components/CoursesCard"
import biologia from '@img/biologia.png'
import Geografia from '@img/Geografia.png'
import Historia from '@img/Historia.png'
import Informatica from '@img/Informatica.png'
import Ingles from '@img/Ingles.png'
import Literatura from '@img/Literatura.png'
import Matematicas from '@img/Matematicas.png'
import FisicoQuimica from '@img/Fisico-Quimica.png'
import '@styles/courses.css'

const Courses = () => {

  const materias = [
    {
        materia: "Biologia",
        nameProf: "Prof. Laura Valenzuela",
        img: biologia
    },
    {
        materia: "FisicoQuimica",
        nameProf: "Prof. Mariela Hernandez",
        img: FisicoQuimica
    },
    {
        materia: "Geografia",
        nameProf: "Prof. Adriana Marquez",
        img: Geografia
    },
    {
        materia: "Historia",
        nameProf: "Prof. Pablo Mariani",
        img: Historia
    },
    {
        materia: "Informatica",
        nameProf: "Prof. Fernanda Sosa",
        img: Informatica
    },

    {
        materia: "Ingles",
        nameProf: "Prof. Montes de Oca",
        img: Ingles
    },
    {
        materia: "Literatura",
        nameProf: "Prof. Ramiro Flores",
        img: Literatura
    },
    {
        materia: "Matematicas",
        nameProf: "Prof. Jorge Perez",
        img: Matematicas
    },


]

  return (
    <div className="courses">
        <h1 className="courses-title">Mis Materias</h1>
       <CoursesCard  items={materias}/>
    </div>
  )
}

export default Courses;
