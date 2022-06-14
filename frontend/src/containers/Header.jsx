import { useState } from "react";
import Logo from "@components/Logo";
import NavBar from "@components/NavBar";
import menuSVG from "@icons/menu.svg";
import calendarSVG from "@icons/calendar.svg";
import "@styles/header.css";

const Header = ({ showed }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => setActive(!active);
    const closeNavbar = () => setActive(false)

    return (
        <header className="header">
            <button onClick={handleClick} className="header-button">
                <img src={menuSVG} alt="button menu" />
            </button>
            <Logo />
            <NavBar show={active} change={handleClick} close={closeNavbar} />
            <button onClick={showed} className="header-button button-calendar">
                <img src={calendarSVG} alt="button menu" />
            </button>
        </header>
    );
};

export default Header;
