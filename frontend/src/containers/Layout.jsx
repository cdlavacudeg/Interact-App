import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCourses } from "../redux/actions";
import Header from "@containers/Header";
import CustomCalendar from "@components/CustomCalendar";

const Layout = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCourses(user.user.uid)).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <Header />
            <Outlet />
            <CustomCalendar />
        </>
    );
};

export default Layout;
