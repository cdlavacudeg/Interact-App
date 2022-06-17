import style from "@styles/LoginPageStyle.module.css";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions";
import "@styles/modalgeneral.css";
import toast, { Toaster } from "react-hot-toast";
import * as yup from 'yup';
import { useState } from "react";



const ForgetPassword = () => {
    const dispatch = useDispatch();

    //validacion
    const [resetEmail, setResetEmail] = useState({
        email: ''
    });
    const { email } = resetEmail;

    const schema = yup.object().shape({
        email: yup
            .string()
            .email('Ingresar un Email valido')
            .required('Email es requerido'),
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setResetEmail(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await schema.validate(resetEmail);
            console.log(resetEmail)
            toast.success(`Envio exitoso`, {
                duration: 5000,
                className: "success",
            });
            dispatch(hideModal()).catch((error) => console.log(error));
        } catch (err) {
            toast.error(`${err.message}`, {
                duration: 3000,
                className: "error",
            });
        }
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
                <input className={style.customInput} onChange={handleChange} type="text" name="email" value={email} />

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
