import { useState } from "react";
import { useDispatch } from "react-redux";
import { hideModal, updateActivity } from "../../redux/actions";

const UpdateActivity = ({ data }) => {
    const { event: events, index, course_id, token } = data;
    const { description, date } = events;
    const [eventActivity, setNotification] = useState({
        description,
        date,
        index,
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

    const handleSubmit = (event, data, index, course_id, token) => {
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
                <label>Descripción</label>
                <input
                    className="customInput"
                    type="text"
                    name="description"
                    value={eventActivity.description}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Fecha</label>
                <input
                    className="customInput"
                    type="text"
                    name="date"
                    value={eventActivity.date}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group form-group--actions">
                <button className="btn_primary mt-2">
                    {" "}
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

export default UpdateActivity;
