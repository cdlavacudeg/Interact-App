import WelcomeUser from "@components/WelcomeUser";
import Recentactivities from "@components/RecentActivities";
import Avisos from "@components/Avisos";

const Main = () => {
    return (
        <main className="main-home">
            <WelcomeUser />
            <Recentactivities />
            <Avisos />
        </main>
    );
};

export default Main;
