import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "@containers/Header";
import CalendarContainer from "./CalendarContainer";
import "@styles/layout.css";

const Layout = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const handleCalendar = () => setShowCalendar(!showCalendar);

    return (
        <>
            <Header showed={handleCalendar} />
            <main className="outlet">
                <Outlet />
            </main>
            <CalendarContainer
                active={showCalendar}
                setActive={handleCalendar}
            />
        </>
    );
};

export default Layout;
