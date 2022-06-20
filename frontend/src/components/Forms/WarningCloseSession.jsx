import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions";
import "@styles/modalgeneral.css";
import { logout } from "../../redux/actions";

const WarningCloseSession = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleLogout = (event) => {
        event.preventDefault();
        dispatch(logout())
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
        window.localStorage.setItem("loggedAppUser", JSON.stringify({}));
        window.localStorage.setItem("courses", JSON.stringify({}));
        window.localStorage.setItem("course", JSON.stringify({}));
        navigate("/");
    };

    return (
        <form>
            <div className="form-group">
                <label>Cerrar Sesión</label>
                <p>¿Estás seguro que deseas cerrar sesión?</p>
            </div>
            <div className="form-group form-group--actions">
                <button className="btn_primary mt-2" onClick={handleLogout}>
                    <strong>Continuar</strong>
                </button>
                <button
                    className="btn_primary mt-2 cancelarWarningButton"
                    onClick={cancel}
                >
                    <strong> Cancelar</strong>
                </button>
            </div>
        </form>
    );
};

export default WarningCloseSession;
