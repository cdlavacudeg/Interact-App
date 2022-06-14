import { useDispatch } from "react-redux";
import { deleteNotification, hideModal } from "../../redux/actions";

const DeleteNotification = ({ data }) => {
    const { item, id, token } = data;
    const dispatch = useDispatch();

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, id, token) => {
        event.preventDefault();
        dispatch(deleteNotification(id, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form onSubmit={(event) => handleSubmit(event, id, token)}>
            <div className="form-group">
                ¿Seguro que quieres eliminar este aviso? Estas el siguiente
                aviso:
                {item.title}
            </div>
            <div className="form-group form-group--actions">
                <button className="primary-btn">Delete</button>
                <button className="cancel-btn" onClick={cancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default DeleteNotification;
