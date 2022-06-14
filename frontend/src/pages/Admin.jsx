import { useSelector } from "react-redux";
import UserAdmin from "../containers/UserAdmin";
import notfound from "@img/notfound.png";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const user = useSelector(state=>state.user)
    const navigate = useNavigate()
    return (
        <>
            {user.user.role == 'admin' ? <UserAdmin /> :(
                <div className="content_404 unauthorized">
                    <img className="img_404" src={notfound} alt="notfound" />
                    <p className="p_404">Pagina no encontrada</p>
                    <button
                        onClick={() => navigate("/")}
                        className="btn_primary btn_404"
                    >
                        Volver a la pagina principal
                    </button>
                </div>
            )}
        </>
    );
}
