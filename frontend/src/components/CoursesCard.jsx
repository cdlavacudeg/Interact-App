import { useNavigate } from "react-router-dom";
import "@styles/coursesCard.css";
import {  useSelector } from "react-redux";
import trashimg from "@icons/trash.svg";
import editimg from "@icons/editpen.svg";



const CoursesCard = ({ name, image, nameProf, id ,course,handleDelete,handleUpdate}) => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const listUsers = useSelector((state) => state.users);


    return (
        <div
            onClick={() => {
                if (user.user.role !== "admin") {
                    navigate(`/materias/${id}/`);
                }
            }}
            className="courses-card"
            style={user.user.role == "admin" ? { cursor: "default" }:{}}
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
                <div className="card-text">
                    {nameProf}
                    {user.user.role == "admin" && (
                    <div className="icons">
                        <div
                            className="trash-icon"
                            onClick={() =>
                                handleDelete(course,id,user.token)
                            }
                        >
                            <img src={trashimg} alt="trash icon" />
                        </div>
                        <div
                            className="edit-icon"
                            onClick={() => handleUpdate(course,listUsers,id,user.token)}
                        >
                            <img src={editimg} alt="trash icon" />
                        </div>
                    </div>
                )}
                </div>

            </div>
        </div>
    );
};

export default CoursesCard;
