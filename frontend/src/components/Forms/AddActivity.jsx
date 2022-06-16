import { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity, hideModal } from "../../redux/actions";

const AddActivity = ({ data }) => {
    const { token, course_id } = data;
    const [events, setNotification] = useState({
        date: "30/06/2022",
        description: "",
        state: "",
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
                <label>Date</label>
                <input
                    type="text"
                    name="date"
                    value={events.date}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={events.description}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Status</label>
                <input
                    type="text"
                    name="status"
                    value={events.status}
                    onChange={onInputChange}
                />
            </div>

            <div className="form-group form-group--actions">
                <button className="primary-btn">Crear</button>
                <button className="cancel-btn" onClick={cancel}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default AddActivity;
