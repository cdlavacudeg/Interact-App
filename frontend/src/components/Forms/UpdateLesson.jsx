import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    hideModal,
    updateLesson,
} from "../../redux/actions";

const UpdateLesson = ({ data }) => {
    const {lecture,index,course_id,token} = data;
    const { title, link } = lecture;
    const [lesson, setNotification] = useState({
        title,
        link
    });
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNotification({ ...lesson, [name]: value });
    };

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, data,index, course_id, token) => {
        event.preventDefault();
        data.index =index
        dispatch(updateLesson(data,course_id, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) => handleSubmit(event, lesson, index, course_id, token)}
        >
            <div className="form-group">
                <label>Titulo</label>
                <input
                    type="text"
                    name="title"
                    value={lesson.title}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Link</label>
                <input
                    type="text"
                    name="link"
                    value={lesson.link}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group form-group--actions">
                <button className="primary-btn">Actualizar</button>
                <button className="cancel-btn" onClick={cancel}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default UpdateLesson;
