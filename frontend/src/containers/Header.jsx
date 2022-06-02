import Logo from "@components/Logo"
import NavBar from "@components/NavBar"
import backArrowSVG from "@icons/back-arrow.svg"
import '@styles/header.css'



const Header = () => {
    return (
        <header className="header">
            <div className="header-backarrow">
                <img src={backArrowSVG} alt="back arrow" />
            </div>
            <Logo/>
            <NavBar/>
        </header>
    )
}

export default Header