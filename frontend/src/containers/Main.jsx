import WelcomeUser from "@components/WelcomeUser";
import Recentactivities from "@components/RecentActivities";
import Avisos from "@components/Avisos";

import "@styles/home.css";

const Main = () => {

    return (
        <div className="main-home">
            <WelcomeUser />
            <Recentactivities />
            <Avisos />
        </div>
    );
};

export default Main;
