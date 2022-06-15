import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions";

const DeleteUser = () => {
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };
    return (
        <div className="modalWarningCard">
            <div className="modalWarningBody">
                <div>
                    <p className="warningMargin">
                        <strong>¿Querés eliminar este usuario?</strong>
                    </p>
                    <p className="pSoftColorWarning">
                        Estás por eliminar al usuario Nombre y Apellido
                        de forma permanente y ya no tendrá acceso a la
                        plataforma
                    </p>
                </div>
                <button className="btn_primary mt-2">
                    {" "}
                    <strong>Eliminar Usuario</strong>
                </button>
                <button
                    className="cancelarWarningButton btn_primary mt-2"
                    onClick={handleSubmit}
                >
                    <strong>Cancelar</strong>{" "}
                </button>
            </div>
        </div>
    );
};

export default DeleteUser;
