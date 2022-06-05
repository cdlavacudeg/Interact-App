import * as React from "react";
import WelcomeUser from "../components/WelcomeUser";
import Recentactivities from "../components/RecentActivities";
import Avisos from "../components/Avisos";


export default function Home () {
    return (
        <>
      
            
        <WelcomeUser />
        <Recentactivities />
        <Avisos /> 
    
        </>
    )
}