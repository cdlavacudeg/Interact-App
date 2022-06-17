import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "@containers/Header";
import CalendarContainer from "@containers/CalendarContainer";
import "@styles/layout.css";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";
import WarningCloseSession from "../components/Forms/WarningCloseSession";

const Layout = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const handleCalendar = () => setShowCalendar(!showCalendar);
    const user = useSelector((state) => state.user);
       const activeModal = useSelector((state) => state.modal);
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
            {activeModal.active && (
                <Modal>
                    {activeModal.name === "Warning Close Session" && (
                        <WarningCloseSession />
                    )}
                </Modal>
            )}
        </>
    );
};

export default Layout;
