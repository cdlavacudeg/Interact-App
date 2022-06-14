import WelcomeUser from "@components/WelcomeUser";
import Recentactivities from "@components/RecentActivities";
import Avisos from "@components/Avisos";

import "@styles/home.css";
import { useSelector } from "react-redux";

const Main = () => {
    const user = useSelector((state) => state.user);
    return (
        <div className="main-home">
            {user.user.role !== "admin" && (
                <>
                    <WelcomeUser />
                    <Recentactivities />
                </>
            )}
            <Avisos />
        </div>
    );
};

export default Main;
