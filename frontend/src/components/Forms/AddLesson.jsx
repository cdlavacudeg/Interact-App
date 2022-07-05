import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLesson, hideModal } from "../../redux/actions";
import "@styles/modalgeneral.css";

const AddLesson = ({ data }) => {
    const { token, course_id } = data;
    const [lesson, setNotification] = useState({
        title: "",
        link: "",
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

    const handleSubmit = (event, course_id, data, token) => {
        event.preventDefault();
        dispatch(addLesson(course_id, data, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) => handleSubmit(event, course_id, lesson, token)}
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
                    <strong>Crear</strong>
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

export default AddLesson;
