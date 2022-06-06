import {useState} from 'react'
import Logo from "@components/Logo"
import NavBar from "@components/NavBar"
import menuSVG from "@icons/menu.svg"
import '@styles/header.css'



const Header = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => setActive(!active)

    return (
        <header className="header">
            <button onClick={handleClick} className="header-button">
                <img src={menuSVG} alt="button menu" />
            </button>
            <Logo/>
            <NavBar  
            show={active}
            change={handleClick}
            />
        </header>
    )
}

export default Header