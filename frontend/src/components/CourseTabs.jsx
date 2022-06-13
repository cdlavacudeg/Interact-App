import { NavLink } from 'react-router-dom'
import '@styles/courseTabs.css'


const CourseTabs = ({params}) => {
  return (
    <div className='courseId-info'>
        <ul className='courseId-list'>
            <li className='courseId-item'><NavLink to={`/materias/${params}/`}>Actividades</NavLink></li>
            <li className='courseId-item'><NavLink to={`/materias/${params}/material`}>Material</NavLink></li>
            <li className='courseId-item'><NavLink to={`/materias/${params}/foro`}>Foro</NavLink></li>
            <li className='courseId-item'><NavLink to={`/materias/${params}/calificaciones`}>Calificaciones</NavLink></li>
        </ul>

    </div>
  )
}

export default CourseTabs
