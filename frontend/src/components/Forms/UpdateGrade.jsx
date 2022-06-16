import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    hideModal,
    updateGrade,
} from "../../redux/actions";
import "@styles/modalgeneral.css";

const UpdateGrade = ({ data }) => {
    const {gradeData,index,course_id,token} = data;
    const { grade, obs, date,student_id} = gradeData;
    const [gradeState, setNotification] = useState({
        student_id,
        grade,
        obs,
        date,
        index
    });
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNotification({ ...gradeState, [name]: value });
    };

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, data, course_id, token) => {
        event.preventDefault();

        dispatch(updateGrade(data,course_id, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form
            onSubmit={(event) => handleSubmit(event, gradeState, course_id, token)}
        >
            <div className="form-group">
                <label>Descripción</label>
                <input
                    className="customInput"
                    type="text"
                    name="obs"
                    value={gradeState.obs}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Nota</label>
                <input
                    className="customInput"
                    type="text"
                    name="grade"
                    value={gradeState.grade}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Fecha</label>
                <input
                    className="customInput"
                    type="text"
                    name="date"
                    value={gradeState.date}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group form-group--actions">
                <button className="btn_primary mt-2"><strong>Actualizar</strong></button>
                <button className="btn_primary mt-2 cancelarWarningButton" onClick={cancel}>
                    <strong>Cancelar</strong>
                </button>
            </div>
        </form>
    );
};

export default UpdateGrade;
