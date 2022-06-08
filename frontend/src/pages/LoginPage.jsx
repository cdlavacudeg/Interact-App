import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "../styles/LoginPageStyle.module.css";

import bgLoginPage from "../assets/images/bgLoginPage.png";
import logo from "../assets/images/logo.png";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions";

// Render Login page-
const LoginPage = () => {
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

    // Forget your password
    const handleResetPassword = () => {
        console.log("CLICK ON RESET PASSWORD");
    };

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
                console.log("FORM STUDENTS:", values);

                dispatch(login(values)).catch((error) => {
                    let message =
                        error.message !== "Network Error"
                            ? error.response.data.error
                            : "en Servidor";
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
                });
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
                console.log("FORM TEACHER:", values);
                dispatch(login(values)).catch((error) => {
                    let message =
                        error.message !== "Network Error"
                            ? error.response.data.error
                            : "en Servidor";
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
                });
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
                        <p
                            onClick={handleResetPassword}
                            className={style.resetPassword}
                        >
                            ¿Olvidaste tu Contraseña?
                        </p>
                        <input
                            className={style.buttonSubmit}
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
                    <p
                        onClick={handleResetPassword}
                        className={style.resetPassword}
                    >
                        ¿Olvidaste tu Contraseña?
                    </p>
                    <input
                        className={style.buttonSubmit}
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
                        EL conocimiento te traerá la oportunidad de hacer la
                        diferencia.
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
                            className={style.choiceFormButton}
                        >
                            Soy estudiante
                        </button>
                        <button
                            onClick={handleTeacher}
                            className={style.choiceFormButton}
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
