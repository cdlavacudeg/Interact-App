import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../redux/actions";
import Layout from "@containers/Layout";
import Home from "@pages/Home.jsx";
import Materias from "@pages/Materias.jsx";
import Calificaciones from "@pages/Calificaciones.jsx";
import Perfil from "@pages/Perfil.jsx";
import Contacto from "@pages/Contacto.jsx";
import Biologia from "@pages/Materias/Biologia";
import Historia from "@pages/Materias/Historia";
import Geografia from "@pages/Materias/Geografia";
import Informatica from "@pages/Materias/Informatica";
import Matematicas from "@pages/Materias/Matematicas";
import FisicoQuimica from "@pages/Materias/FisicoQuimica";
import Ingles from "@pages/Materias/Ingles";
import Literatura from "@pages/Materias/Literatura";
import LoginPage from "@pages/LoginPage";
import "@styles/App.css";

const App = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    if (!user.token) {
        return <LoginPage />;
    }

    dispatch(getCourses(user.user.uid)).catch((error) => {
        console.log(error);
    });

    window.localStorage.setItem("loggedAppUser", JSON.stringify(user));
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/materias" element={<Materias />} />
                    <Route path="/materias/Biologia" element={<Biologia />} />
                    <Route path="/materias/Historia" element={<Historia />} />
                    <Route
                        path="/materias/Matematicas"
                        element={<Matematicas />}
                    />
                    <Route
                        path="/materias/Informatica"
                        element={<Informatica />}
                    />
                    <Route path="/materias/Ingles" element={<Ingles />} />
                    <Route
                        path="/materias/FisicoQuimica"
                        element={<FisicoQuimica />}
                    />
                    <Route
                        path="/materias/Literatura"
                        element={<Literatura />}
                    />
                    <Route path="/materias/Geografia" element={<Geografia />} />
                    <Route
                        path="/calificaciones"
                        element={<Calificaciones />}
                    />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
