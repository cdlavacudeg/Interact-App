import { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity, hideModal } from "../../redux/actions";
import "@styles/modalgeneral.css";

const AddActivity = ({ data }) => {
    const { token, course_id } = data;
    const [events, setNotification] = useState({
        date: "30/06/2022",
        description: "",
        status: "true",
    });
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNotification({ ...events, [name]: value });
    };

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, course_id, data, token) => {
        event.preventDefault();
        dispatch(addActivity(course_id, data, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) => handleSubmit(event, course_id, events, token)}
        >
            <div className="form-group">
                <label>Fecha</label>
                <input
                    className="customInput"
                    type="text"
                    name="date"
                    value={events.date}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Descripción</label>
                <input
                    className="customInput"
                    type="text"
                    name="description"
                    value={events.description}
                    onChange={onInputChange}
                />
            </div>

            <div className="form-group form-group--actions">
                <button className="btn_primary mt-2"><strong>Crear</strong></button>
                <button className="btn_primary mt-2 cancelarWarningButton" onClick={cancel}>
                   <strong> Cancelar</strong> 
                </button>
            </div>
        </form>
    );
};

export default AddActivity;
