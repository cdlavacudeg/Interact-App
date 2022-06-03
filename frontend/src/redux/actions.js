import axios from 'axios';

export function getUser() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:5000/api/v1/user");
        console.log(json.data)
        return dispatch({
            type: "GET_USER",
            payload: json.data,
        });
    };
}