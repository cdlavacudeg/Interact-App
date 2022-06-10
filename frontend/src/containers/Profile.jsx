import * as React from "react";
import ImageNameProfile from '../components/ImgNameProfile';
import PersonalDataProfile from "../components/PersonalDataProfile";
import ProfesorStudentList from "../components/ProfesorStudentList";

function Profile () {
    return (
        <section className="profile-section">
            <ImageNameProfile />
            <PersonalDataProfile />
            <ProfesorStudentList />
        </section>
    )
}

export default Profile;