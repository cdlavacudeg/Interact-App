import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal, updateActivity } from "../../redux/actions";

const UpdateActivity = ({ data }) => {
    const { events, index, course_id, token } = data;
    const { description, date } = events;
    const [eventActivity, setNotification] = useState({
        description,
        date,
    });
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNotification({ ...eventActivity, [name]: value });
    };

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, index, data, course_id, token) => {
        event.preventDefault();
        data.index = index;
        dispatch(updateActivity(course_id, data, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) =>
                handleSubmit(event, eventActivity, index, course_id, token)
            }
        >
            <div className="form-group">
                <label>Description</label>
                <input
                    type="text"
                    name="title"
                    value={eventActivity.description}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Date</label>
                <input
                    type="text"
                    name="link"
                    value={eventActivity.date}
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

export default UpdateActivity;
