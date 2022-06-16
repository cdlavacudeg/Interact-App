import style from "@styles/LoginPageStyle.module.css";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions";
import "@styles/modalgeneral.css";

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };
    return (
        <div>
            <div className={style.modalBody}>
                <p style={{ marginBottom: "0", marginTop: "0" }}>
                    Recupera tu cuenta
                </p>
                <p style={{ color: "#656565", marginTop: "0" }}>
                    Ingresa tu correo electronico
                </p>
                <input className={style.customInput} type="text" />
                <button onClick={handleSubmit} className="btn_primary mt-2">
                    <strong>Continuar</strong>
                </button>
                <button onClick={handleSubmit} className="btn_primary mt-2">
                <strong> Cancelar </strong>
                </button>
            </div>
        </div>
    );
};

export default ForgetPassword;
