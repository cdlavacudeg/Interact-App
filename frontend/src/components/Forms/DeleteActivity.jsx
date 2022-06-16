import { useDispatch } from "react-redux";
import { deleteActivity, hideModal } from "../../redux/actions";

const DeleteActivity = ({ data }) => {
    const { events, index, course_id, token } = data;
    const dispatch = useDispatch();

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, index, course_id, token) => {
        event.preventDefault();
        dispatch(deleteActivity(index, course_id, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) => handleSubmit(event, index, course_id, token)}
        >
            <div className="form-group">
                ¿Seguro que quieres eliminar este aviso? Estas el siguiente
                aviso:
                {events.description}
            </div>
            <div className="form-group form-group--actions">
                <button className="primary-btn">Eliminar</button>
                <button className="cancel-btn" onClick={cancel}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export default DeleteActivity;
