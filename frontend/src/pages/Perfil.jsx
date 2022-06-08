import React from 'react';
import Profile from '../containers/Profile';
import Header from '../containers/Header';
import CustomCalendar from '@components/CustomCalendar'
export default function Perfil () {
    return (
        <> 
                <Header />
                <Profile />
                <CustomCalendar />
            
        </>
    )
}