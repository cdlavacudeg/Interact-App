import { Outlet } from "react-router-dom";
import Header from "@containers/Header";
import CustomCalendar from "@components/CustomCalendar";
import '@styles/layout.css'

const Layout = () => {

    return (
        <>
            <Header />
            <main className="outlet">
            <Outlet />
            </main>
            <CustomCalendar />
        </>
    );
};

export default Layout;
