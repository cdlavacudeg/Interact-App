import { useDispatch } from "react-redux";
import { deleteCourse, hideModal } from "../../redux/actions";
import "@styles/modalgeneral.css";

const DeleteCourse = ({data}) => {
    const { item, id, token} = data
    const dispatch = useDispatch();

    const handleSubmit = (e, id, token) => {
        e.preventDefault();
        dispatch(deleteCourse(id, token))
        .then(() => dispatch(hideModal()))
        .catch((error) => console.log(error));
        console.log('id:',id,'token:', token);
    };
    return (
        <div>
            <div>
                <div>
                    <p className="warningMargin">
                        <strong>¿Querés eliminar este curso?</strong>
                    </p>
                    <p className="pSoftColorWarning">
                        Estás por eliminar a <span>{`"${item.courseName}"`}</span>  de forma
                        permanente.
                    </p>
                </div>
                <form onSubmit={(e) => handleSubmit(e, id, token)}>
                    <button
                    className="btn_primary mt-2">
                        {" "}
                        Eliminar curso
                    </button>
                    <button
                         onClick={() => dispatch(hideModal())}
                        className="cancelarWarningButton btn_primary mt-2"
                        type="submit"
                    >
                        Cancelar{" "}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default DeleteCourse;
