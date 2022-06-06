import axios from 'axios';
import { Toaster } from 'react-hot-toast';

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


export function postLogin(credentials) {
    try {
        return async function (dispatch) {
            var json = await axios.post("http://localhost:5000/api/v1/auth/login", credentials);

            console.log(json.data)
            return dispatch({
                type: "POST_LOGIN",
                payload: json.data,
            });
        };
    } catch (error) {
        console.log(error);
    }
}