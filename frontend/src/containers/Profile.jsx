import * as React from "react";
import ImageNameProfile from '../components/ImgNameProfile';
import PersonalDataProfile from "../components/PersonalDataProfile";
import ProfesorList from "../components/ProfesorList";
function Profile () {
    return (
        <section className="profile-section">
            <h1> Mi Perfil</h1>
            <ImageNameProfile />
            <PersonalDataProfile />
            <ProfesorList />
        </section>
    )
}

export default Profile;