import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGrade, hideModal } from "../../redux/actions";
import "@styles/modalgeneral.css";

const AddGrade = ({ data }) => {
    const { token, course_id, student_list } = data;

    const [grade, setNotification] = useState({
        student_id: "",
        grade: "",
        obs: "",
        date: "",
    });
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNotification({ ...grade, [name]: value });
    };

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, course_id, data, token) => {
        event.preventDefault();
        event.preventDefault();
        dispatch(addGrade(course_id, data, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) => handleSubmit(event, course_id, grade, token)}
        >
            <div className="form-group">
                <label>Descripción</label>
                <input
                    className="customInput"
                    type="text"
                    name="obs"
                    value={grade.obs}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Estudiante</label>
                <select
                    className="customInput"
                    name="student_id"
                    value={grade.student_id}
                    onChange={onInputChange}
                >
                    <option value="select_student">Selecciona</option>
                    {student_list.map((student, index) => (
                        <option value={student._id} key={index}>
                            {student.fullName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Nota</label>
                <input
                    className="customInput"
                    type="text"
                    name="grade"
                    value={grade.grade}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Fecha</label>
                <input
                    className="customInput"
                    type="text"
                    name="date"
                    value={grade.date}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group form-group--actions">
                <button className="btn_primary mt-2">
                    <strong>Crear</strong>
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

export default AddGrade;
