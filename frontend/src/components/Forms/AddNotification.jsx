import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotification, hideModal } from "../../redux/actions";

const AddNotification = ({ data }) => {
    const { token } = data;
    const [notification, setNotification] = useState({
        title: "",
        content: "",
        date: "30/06/2022",
    });
    const dispatch = useDispatch();

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setNotification({ ...notification, [name]: value });
    };

    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const handleSubmit = (event, data, token) => {
        event.preventDefault();
        dispatch(addNotification(data, token))
            .then(() => dispatch(hideModal()))
            .catch((error) => console.log(error));
    };

    return (
        <form onSubmit={(event) => handleSubmit(event, notification, token)}>
            <div className="form-group">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={notification.title}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Content</label>
                <input
                    type="text"
                    name="content"
                    value={notification.content}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group">
                <label>Date</label>
                <input
                    type="text"
                    name="date"
                    value={notification.date}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group form-group--actions">
                <button className="primary-btn">Create</button>
                <button className="cancel-btn" onClick={cancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default AddNotification;
