import { NavLink, useNavigate } from "react-router-dom";
import logoSVG from "@icons/logo.svg";
import "@styles/logo.css";

const Logo = () => {
    const location = useNavigate();

    const handleClick = () => location("/");

    return (
        <div className="header-logo" onClick={handleClick}>
            <img className="header-logo-img" src={logoSVG} alt="logo inteact" />
        </div>
    );
};

export default Logo;
