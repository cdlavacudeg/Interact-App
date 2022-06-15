import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "../styles/LoginPageStyle.module.css";
import bgLoginPage from "../assets/images/bgLoginPage.png";
import logo from "../assets/images/logo.png";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login, showModal } from "../redux/actions";
import Modal from "../components/Modal";
import ForgetPassword from "../components/Forms/ForgetPassword";

// Render Login page-
const LoginPage = () => {
    const activeModal = useSelector((state) => state.modal);
    const [forms, setForms] = useState(false); // SHow form or button to select user.
    const [customForm, setCustomForm] = useState(false); // Use to select what form render.

    const dispatch = useDispatch();

    // User click in "soy estudiante".
    const handleStudent = () => {
        setForms(true);
        setCustomForm(false);
    };

    // User click in "soy profesor"
    const handleTeacher = () => {
        setForms(true);
        setCustomForm(true);
    };

    // Arrow go back
    const handleGoBack = () => {
        setForms(false);
    };


    const handleModal=()=>{
        dispatch(showModal("Forget Password"));
    }



    // Custom fomrs
    const FormLogin = () => {
        // Initial values form Students
        const formikStudent = useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            validationSchema: Yup.object({
                email: Yup.string().required("Email required"),
                password: Yup.string().required("Password required"),
            }),
            onSubmit: (values) => {
                const { email, password } = values;
                dispatch(login({ email, password, role: "student" })).catch(
                    (error) => {
                        let message =
                            error.message == "Network Error" ||
                                error.message == "Incorrect role"
                                ? error.message
                                : error.response.data.error;
                        toast.error(`Error ${message} `, {
                            style: {
                                border: "1px solid tomato",
                                padding: "16px",
                                color: "black",
                            },
                            iconTheme: {
                                primary: "tomato",
                                secondary: "#FFFAEE",
                            },
                        });
                    }
                );
            },
        });

        // Initial values form Teacher
        const formikTeacher = useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            validationSchema: Yup.object({
                email: Yup.string().email().required("Email required"),
                password: Yup.string().required("Password required"),
            }),
            onSubmit: (values) => {
                const { email, password } = values;
                dispatch(login({ email, password, role: "teacher" })).catch(
                    (error) => {
                        let message =
                            error.message == "Network Error" ||
                                error.message == "Rol incorrecto"
                                ? error.message
                                : error.response.data.error;
                        toast.error(`Error ${message} `, {
                            style: {
                                border: "1px solid tomato",
                                padding: "16px",
                                color: "black",
                            },
                            iconTheme: {
                                primary: "tomato",
                                secondary: "#FFFAEE",
                            },
                        });
                    }
                );
            },
        });

        // custom form is true, render teacher form.
        if (customForm) {
            return (
                <div className={style.boxForm}>
                    <div>
                        <Toaster position="top-right" reverseOrder={false} />
                    </div>
                    <form
                        className={style.formContent}
                        onSubmit={formikTeacher.handleSubmit}
                    >
                        <div className={style.contentInput}>
                            <input
                                style={{
                                    borderLeft: formikTeacher.errors.email
                                        ? "3px solid tomato"
                                        : "1.5px solid #b9b9b9",
                                }}
                                className={style.customInput}
                                type="email"
                                placeholder="Correo electronico"
                                id="email"
                                name="email"
                                onChange={formikTeacher.handleChange}
                            />
                            {formikTeacher.errors.email ? (
                                <div className={style.formikError}>
                                    {" "}
                                    {formikTeacher.errors.email}{" "}
                                </div>
                            ) : null}
                        </div>
                        <div className={style.contentInput}>
                            <input
                                style={{
                                    marginTop: "5px",
                                    borderLeft: formikTeacher.errors.password
                                        ? "3px solid tomato"
                                        : "1.5px solid #b9b9b9",
                                }}
                                className={style.customInput}
                                type="password"
                                placeholder="password"
                                id="password"
                                name="password"
                                onChange={formikTeacher.handleChange}
                                value={formikTeacher.values.password}
                            />
                            {formikTeacher.errors.password ? (
                                <div className={style.formikError}>
                                    {" "}
                                    {formikTeacher.errors.password}{" "}
                                </div>
                            ) : null}
                        </div>

                        <div>
                            {activeModal.active && (
                                <Modal >
                                    {activeModal.name === "Forget Password" && (
                                        <ForgetPassword />
                                    )}
                                </Modal>
                            )}
                            <p

                                onClick={handleModal}
                                className={style.resetPassword}
                            >
                                ¿Olvidaste tu Contraseña?
                            </p>
                        </div>

                        <input
                            className={style.choiceFormButton}
                            type="submit"
                            value="Iniciar sessión"
                        />
                    </form>
                </div>
            );
        }

        // custom form is false, render student form
        return (
            <div className={style.boxForm}>
                <div>
                    <Toaster position="top-right" reverseOrder={false} />
                </div>
                <form
                    className={style.formContent}
                    onSubmit={formikStudent.handleSubmit}
                >
                    <div className={style.contentInput}>
                        <input
                            style={{
                                borderLeft: formikStudent.errors.email
                                    ? "3px solid tomato"
                                    : "1.5px solid #b9b9b9",
                            }}
                            className={style.customInput}
                            type="email"
                            placeholder="Correo electronico"
                            id="email"
                            name="email"
                            onChange={formikStudent.handleChange}
                        />
                        {formikStudent.errors.email ? (
                            <div className={style.formikError}>
                                {" "}
                                {formikStudent.errors.email}{" "}
                            </div>
                        ) : null}
                    </div>
                    <div className={style.contentInput}>
                        <input
                            style={{
                                marginTop: "5px",
                                borderLeft: formikStudent.errors.password
                                    ? "3px solid tomato"
                                    : "1.5px solid #b9b9b9",
                            }}
                            className={style.customInput}
                            type="password"
                            placeholder="password"
                            id="password"
                            name="password"
                            onChange={formikStudent.handleChange}
                            value={formikStudent.values.password}
                        />
                        {formikStudent.errors.password ? (
                            <div className={style.formikError}>
                                {" "}
                                {formikStudent.errors.password}{" "}
                            </div>
                        ) : null}
                    </div>
                    {activeModal.active && (
                                <Modal >
                                    {activeModal.name === "Forget Password" && (
                                        <ForgetPassword />
                                    )}
                                </Modal>
                            )}
                    <p
                        onClick={handleModal}
                        className={style.resetPassword}
                    >
                        ¿Olvidaste tu Contraseña?
                    </p>
                    <input
                        className={style.choiceFormButton}
                        type="submit"
                        value="Iniciar sessión"
                    />
                </form>
            </div>
        );
    };


    return (
        <main className={style.loginPageContent}>
            <article className={style.imgContent}>
                <img
                    className={style.imgLogin}
                    src={bgLoginPage}
                    alt="imgLogin"
                />
            </article>
            <article className={style.formsContent}>
                <section className={style.logoContent}>
                    {forms ? (
                        <div onClick={handleGoBack}>
                            <FaArrowLeft className={style.arrowBack} />
                        </div>
                    ) : (
                        <FaArrowLeft className={style.needToAlign} />
                    )}
                    <img className={style.logo} src={logo} alt="logo" />
                </section>
                <section className={style.motivatingPhraseContent}>
                    <h3>
                        El conocimiento te <br /> traerá la
                        <br /> oportunidad de
                        <br /> hacer la diferencia.
                    </h3>
                    <p>
                        <i>Claire Fagin</i>
                    </p>
                </section>
                {forms ? (
                    <FormLogin />
                ) : (
                    <section className={style.choiceLoginButtons}>
                        <button
                            onClick={handleStudent}
                            className="btn_primary mt-4"
                        >
                            Soy estudiante
                        </button>
                        <button
                            onClick={handleTeacher}
                            className="btn_primary mt-4"
                        >
                            Soy docente
                        </button>
                    </section>
                )}
            </article>
        </main>
    );
};

export default LoginPage;
