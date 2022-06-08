import WelcomeUser from "@components/WelcomeUser";
import Recentactivities from "@components/RecentActivities";
import Avisos from "@components/Avisos";
import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser  } from '../redux/actions';
import "@styles/home.css";

const Main = () => {
    const dispatch = useDispatch();
    let user  = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <main className="main-home">
            {user.map((p) => {
               return (
                <WelcomeUser
                    name={p.name}
                    gender={p.gender}
                    key={p.token}
                />
               )
           })}

            <Recentactivities />
            <Avisos />
        </main>
    );
};

export default Main;
