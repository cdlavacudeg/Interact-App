import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "@containers/Header";

import CalendarContainer from "@containers/CalendarContainer";

import "@styles/layout.css";
import { useSelector } from "react-redux";

const Layout = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const handleCalendar = () => setShowCalendar(!showCalendar);
    const user = useSelector((state) => state.user);
    return (
        <>
            <Header showed={handleCalendar} />
            <main className="outlet">
                <Outlet />
            </main>
            {user.user.role !== "admin" && (
                <CalendarContainer
                    active={showCalendar}
                    setActive={handleCalendar}
                />
            )}
        </>
    );
};

export default Layout;
