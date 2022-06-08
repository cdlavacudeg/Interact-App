import { useNavigate } from 'react-router-dom';
import '@styles/coursesCard.css'

const CoursesCard = ({name, image, nameProf}) => {
  const navigate = useNavigate()

  console.log(name, image, nameProf)

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
            <div onClick={() => navigate(`/materias/${name}`)} className="materia col-sm-6 col-md-4 col-6 " >
                <div className="card cardMaterias">
                    <img src={image} className="card-img-top" style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{nameProf}</p>
                    </div>
                </div>
            </div>
</div>
  )
}

export default CoursesCard
