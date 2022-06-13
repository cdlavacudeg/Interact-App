import { useNavigate } from "react-router-dom";
import "@styles/coursesCard.css";

const CoursesCard = ({ name, image, nameProf, id }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/materias/${id}/`)}
            className="courses-card"
        >
            <img
                src={image}
                className="card-img-top"
                style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                }}
                alt="..."
            />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{nameProf}</p>
            </div>
        </div>
    );
};

export default CoursesCard;
