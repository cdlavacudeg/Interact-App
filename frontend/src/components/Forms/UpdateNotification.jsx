import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    hideModal,
    updateNotification,
} from "../../redux/actions";

const UpdateNotification = ({ data }) => {
    const { item, token } = data;
    const { title, content, date, uid } = item;
    const [notification, setNotification] = useState({
        title,
        content,
        date,
    });
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNotification({ ...notification, [name]: value });
    };

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, data, uid, token) => {
        event.preventDefault();
        dispatch(updateNotification(data, uid, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) => handleSubmit(event, notification, uid, token)}
        >
            <div className="form-group">
                <label className="mt-1">Titulo</label>
                <input
                    className="customInput"
                    type="text"
                    name="title"
                    value={notification.title}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label className="mt-2">Contenido</label>
                <input
                    className="customInput"
                    type="text"
                    name="content"
                    value={notification.content}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label className="mt-2">Fecha</label>
                <input
                    className="customInput"
                    type="text"
                    name="date"
                    value={notification.date}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group form-group--actions">
                <button className="btn_primary mt-3"><strong>Actualizar</strong></button>
                <button className="btn_primary mt-2 cancelarWarningButton" onClick={cancel}>
                <strong> Cancelar </strong>
                </button>
            </div>
        </form>
    );
};

export default UpdateNotification;
