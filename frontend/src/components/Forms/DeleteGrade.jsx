import { useDispatch } from "react-redux";
import { deleteGrade, deleteLesson, hideModal } from "../../redux/actions";
import "@styles/modalgeneral.css";

const DeleteGrade = ({ data }) => {
    const { grade, course_id, token } = data;
    const dispatch = useDispatch();

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, student_id, course_id, token) => {
        event.preventDefault();
        dispatch(deleteGrade(student_id, course_id, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) =>
                handleSubmit(event, grade.student_id, course_id, token)
            }
        >
            <div className="form-group">
                ¿Seguro que quieres eliminar Todas las notas de {grade.student}?
            </div>
            <div className="form-group form-group--actions">
                <button className="btn_primary mt-2">
                    <strong>Eliminar</strong>
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

export default DeleteGrade;
