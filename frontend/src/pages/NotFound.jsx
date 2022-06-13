import {useNavigate} from "react-router-dom";
import notfound from '@img/notfound.png';
import logo from '@img/logo.png';
import '@styles/notfound.css';

const NotFound = () => {
    const navigate = useNavigate()

    const handleClick = () => navigate('/')

    return (
        <>
            <div className="main_404">
                <img className="logo_404" src={logo} alt="logo" />
                <div className="content_404">
                    <img className="img_404" src={notfound} alt="notfound" />
                    <p className="p_404">
                        Pagina no encontrada
                    </p>
                    <button onClick={handleClick} className="btn_primary btn_404">
                        Volver a la pagina principal
                    </button>
                </div>

            </div>
        </>
    );
};

export default NotFound;
