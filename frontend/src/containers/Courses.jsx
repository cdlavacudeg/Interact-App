import CoursesCard from "../components/CoursesCard";
import { useSelector, useDispatch } from "react-redux";
import "@styles/courses.css";
import DeleteCourse from "../components/Forms/DeleteCourse";
import { useState } from "react";
import { showModal } from "../redux/actions";
import Modal from "../components/Modal";

const Courses = () => {
    const materias = useSelector((state) => state.courses);
    const activeModal = useSelector((state) => state.modal);
    const [itemData, setItemData] = useState({});
    const dispatch = useDispatch();
    const handleDelete = (item,id,token) => {
        dispatch(showModal("Delete Course"));
        setItemData({
            item,
            id,
            token
        })
    };
    const handleUpdate = (item,id, token) => {
        dispatch(showModal("Update Course"));
        setItemData({
            item,
            id,
            token
        })
    };
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
                    {activeModal.name == "Update Course" &&
                        {
                            /* <UpdateNotification data={itemData} /> */
                        }}
                </Modal>
            )}
        </div>
    );
};

export default Courses;
