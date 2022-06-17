import style from "@styles/LoginPageStyle.module.css";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions";
import "@styles/modalgeneral.css";
import toast, { Toaster } from "react-hot-toast";

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success(`Envio exitoso`, {
            duration: 5000,
            className: "success",
        });
        dispatch(hideModal()).catch((error) => console.log(error));

    };
    const handleSubmitCancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));

    };
    return (
        <div>
             <Toaster position="top-right" reverseOrder={true} />
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
                <button onClick={handleSubmitCancel} className="btn_primary mt-2">
                <strong> Cancelar </strong>
                </button>
            </div>
        </div>
    );
};

export default ForgetPassword;
