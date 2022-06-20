import { useState } from "react";
import Logo from "@components/Logo";
import NavBar from "@components/NavBar";
import menuSVG from "@icons/menu.svg";
import calendarSVG from "@icons/calendar.svg";
import "@styles/header.css";
import { useSelector } from "react-redux";

const Header = ({ showed }) => {
    const [active, setActive] = useState(false);
    const user = useSelector((state) => state.user);

    const closeNavbar = () => setActive(false);

    return (
        <header className="header">
            <button onClick={() => setActive(true)} className="header-button">
                <img src={menuSVG} alt="button menu" />
            </button>
            <Logo />
            <NavBar show={active} close={closeNavbar} />
            {user.user.role !== "admin" ? (
                <button
                    onClick={showed}
                    className="header-button button-calendar"
                >
                    <img src={calendarSVG} alt="button menu" />
                </button>
            ) : (
                <button
                    onClick={showed}
                    className="header-button button-calendar"
                ></button>
            )}
        </header>
    );
};

export default Header;
