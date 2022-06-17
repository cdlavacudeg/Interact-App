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
                <p className="pSoftColorWarning">¿Seguro que quieres eliminar este aviso? Estas en el siguiente
                aviso: </p>
                {events.description}
            </div>
            <div className="form-group form-group--actions">
                <button className="btn_primary mt-2"><strong>Eliminar</strong></button>
                <button className="btn_primary mt-2 cancelarWarningButton" onClick={cancel}>
                   <strong>Cancelar</strong> 
                </button>
            </div>
        </form>
    );
};

export default DeleteActivity;
