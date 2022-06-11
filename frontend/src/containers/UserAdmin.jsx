import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";

const UserAdmin = () => {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsers()).catch((error) => console.log(error));
    }, []);
    console.log(listUsers);
    return (
        <>
            <ul>
                {listUsers.map((user) => {
                    let { fullName, gender, email, courses, role } = user;
                    return (
                        <li key={user.uid}>
                            {fullName}--{gender}--{email}--{role}
                            <br />
                            {courses.map((course) => (
                                <span key={course._id}>
                                    {" "}
                                    {course.courseName}
                                </span>
                            ))}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default UserAdmin;
