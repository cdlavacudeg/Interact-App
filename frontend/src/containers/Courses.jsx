import CoursesCard from "../components/CoursesCard";
import { useSelector, useDispatch } from "react-redux";
import "@styles/courses.css";
import DeleteCourse from "../components/Forms/DeleteCourse";
import { useEffect, useState } from "react";
import { getUsers, showModal } from "../redux/actions";
import Modal from "../components/Modal";
import UpdateCourse from "../components/Forms/UpdateCourse";

const Courses = () => {
    const materias = useSelector((state) => state.courses);
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
            {activeModal.active && (
                <Modal>
                    {activeModal.name === "Delete Course" &&(
                        <DeleteCourse data={itemData} />
                    )}
                    {activeModal.name == "Update Course" &&(
                        <UpdateCourse data={itemData} />
                    )}
                </Modal>
            )}
        </div>
    );
};

export default Courses;
