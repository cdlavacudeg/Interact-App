import { Outlet } from "react-router-dom";
import Header from "@containers/Header";
import CustomCalendar from "@components/CustomCalendar";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <CustomCalendar />
        </>
    );
};

export default Layout;
