import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal, updateLesson } from "../../redux/actions";
import "@styles/modalgeneral.css";

const UpdateLesson = ({ data }) => {
    const { lecture, index, course_id, token } = data;
    const { title, link } = lecture;
    const [lesson, setNotification] = useState({
        title,
        link,
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

    const handleSubmit = (event, index, data, course_id, token) => {
        event.preventDefault();
        data.index = index;
        dispatch(updateLesson(course_id, data, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) =>
                handleSubmit(event, lesson, index, course_id, token)
            }
        >
            <div className="form-group">
                <label>Titulo</label>
                <input
                    className="customInput"
                    type="text"
                    name="title"
                    value={lesson.title}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Link</label>
                <input
                    className="customInput"
                    type="text"
                    name="link"
                    value={lesson.link}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group form-group--actions">
                <button className="btn_primary mt-2">
                    <strong>Actualizar</strong>
                </button>
                <button
                    className="btn_primary mt-2 cancelarWarningButton"
                    onClick={cancel}
                >
                    <strong>Cancelar</strong>
                </button>
            </div>
        </form>
    );
};

export default UpdateLesson;
