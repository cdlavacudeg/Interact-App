import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../redux/actions";
import Layout from "@containers/Layout";
import Home from "@pages/Home.jsx";
import Materias from "@pages/Materias.jsx";
import Calificaciones from "@pages/Calificaciones.jsx";
import Perfil from "@pages/Perfil.jsx";
import Contacto from "@pages/Contacto.jsx";
import LoginPage from "@pages/LoginPage";
import Admin from "../pages/Admin";
import Materiaid from "../pages/Materiaid";
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
                    <Route path='/materias/:materiaId' element={<Materiaid />} />
                    <Route
                        path="/calificaciones"
                        element={<Calificaciones />}
                    />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Route>
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
