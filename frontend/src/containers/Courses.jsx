import CoursesCard from "../components/CoursesCard";
import { useSelector, useDispatch } from "react-redux";
import "@styles/courses.css";
import DeleteCourse from "../components/Forms/DeleteCourse";
import { useEffect, useState } from "react";
import { getUsers, showModal } from "../redux/actions";
import Modal from "../components/Modal";
import UpdateCourse from "../components/Forms/UpdateCourse";
import logoPlus from "@icons/PlusButton.svg";
import AddCourse from "../components/Forms/AddCourse";
import WarningCloseSession from "../components/Forms/WarningCloseSession";

const Courses = () => {
    const materias = useSelector((state) => state.courses);
    const user = useSelector(state=>state.user);
    const listUsers = useSelector((state) => state.users);
    const activeModal = useSelector((state) => state.modal);
    const [itemData, setItemData] = useState({});
    const dispatch = useDispatch();

    const handleDelete = (item,id,token) => {
        dispatch(showModal("Delete Course"));
        console.log(item)
        setItemData({
            item,
            id,
            token
        })
    };

    const handleUpdate = (item,listUsers,id, token) => {
        dispatch(showModal("Update Course"));
        setItemData({
            item,
            listUsers,
            id,
            token
        })
    };
    const handleAdd = (listUsers, token) => {
        dispatch(showModal("Add Course"));
        setItemData({
            listUsers,
            token
        })
    };
    useEffect(() => {
        dispatch(getUsers()).catch((error) => console.log(error));
    }, []);
    return (
        <div className="courses">
            <h1 className="courses-title">Mis Materias</h1>
            <section className="courses-container">
                {materias ? (
                    materias.map((item) => {
                        return (
                            <CoursesCard
                                name={item.courseName}
                                image={item.image}
                                nameProf={item.teacher.fullName || "No asignado"}
                                key={item._id || item.uid}
                                course={item}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                                id={item._id || item.uid}
                            />
                        );
                    })
                ) : (
                    <div>No hay materias</div>
                )}
            </section>
            {user.user.role == "admin" && (
                <div className="plusUser">
                    <img
                        onClick={() => handleAdd(listUsers,user.token)}
                        className="plusUser__imgPlusLogo"
                        src={logoPlus}
                        alt=""
                    />
                </div>
            )}
            {activeModal.active && (
                <Modal>
                    {activeModal.name === "Delete Course" &&(
                        <DeleteCourse data={itemData} />
                    )}
                    {activeModal.name == "Update Course" &&(
                        <UpdateCourse data={itemData} />
                    )}
                    {activeModal.name == "Add Course" &&(
                        <AddCourse data={itemData} />
                    )}
                    {activeModal.name === "Warning Close Session" && (
                            <WarningCloseSession />
                    )}
                </Modal>
            )}
        </div>
    );
};

export default Courses;
