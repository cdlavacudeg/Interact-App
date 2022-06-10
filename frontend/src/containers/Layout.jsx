import { Outlet } from "react-router-dom";
import Header from "@containers/Header";
import CustomCalendar from "@components/CustomCalendar";
import CalendarContainer from "./CalendarContainer";
import "@styles/layout.css";

const Layout = () => {
    return (
        <>
            <Header />
            <main className="outlet">
                <Outlet />
            </main>
            <CalendarContainer />
        </>
    );
};

export default Layout;
