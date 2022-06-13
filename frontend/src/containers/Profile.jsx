import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageNameProfile from "../components/ImgNameProfile";
import PersonalDataProfile from "../components/PersonalDataProfile";
import ProfesorStudentList from "../components/ProfesorStudentList";
import ProfesorListMobile from "../components/ProfesorListMobile";
import { getProfile } from "../redux/actions";

function Profile() {
    const user = useSelector((state) => state.user);
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile(user.user.uid));
    }, []);
    return (
        <section className="profile-section">
            <ImageNameProfile />
            <PersonalDataProfile />
            <ProfesorStudentList list={profile} />
            <ProfesorListMobile list={profile} />
        </section>
    );
}

export default Profile;
