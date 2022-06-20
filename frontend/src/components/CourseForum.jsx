import processSVG from "../assets/images/inProcess.svg";
import "@styles/courseForum.css";

const CourseForum = () => {
    return (
        <div className="courseForum">
            <h2 className="courseForum-title">Estamos construyendo...</h2>
            <figure className="courseForum-img">
                <img src={processSVG} alt="in process image" />
            </figure>
        </div>
    );
};

export default CourseForum;
