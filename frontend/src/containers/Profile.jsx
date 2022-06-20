import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageNameProfile from "../components/ImgNameProfile";
import PersonalDataProfile from "../components/PersonalDataProfile";
import ProfesorStudentList from "../components/ProfesorStudentList";
import ProfesorListMobile from "../components/ProfesorListMobile";
import StudentList from "../components/StudentList";
import StudentListMobile from "../components/StudentListMobile";
import { getProfile } from "../redux/actions";
import Modal from "../components/Modal";
import WarningCloseSession from "../components/Forms/WarningCloseSession";

function Profile() {
    const activeModal = useSelector((state) => state.modal);
    const user = useSelector((state) => state.user);
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const role = user.user.role;

    useEffect(() => {
        dispatch(getProfile(user.user.uid));
    }, []);
    return (
        <section className="profile-section">
            {role === "student" && (
                <>
                    <ImageNameProfile />
                    <PersonalDataProfile />
                    <ProfesorStudentList list={profile} />
                    <ProfesorListMobile list={profile} />
                </>
            )}
            {role === "teacher" && (
                <>
                    <ImageNameProfile />
                    <PersonalDataProfile />
                    <StudentList list={profile} />
                    <StudentListMobile list={profile} />
                </>
            )}
            {activeModal.active && (
                <Modal>
                    {activeModal.name === "Warning Close Session" && (
                        <WarningCloseSession />
                    )}
                </Modal>
            )}
        </section>
    );
}

export default Profile;
