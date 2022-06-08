import axios from 'axios';

const baseURL = import.meta.VITE_APP_BACKEND || '${baseURL}'
export function getUsers() {
    return async function (dispatch) {
        var json = await axios.get(`${baseURL}/api/v1/user`);
        console.log(json.data);
        return dispatch({
            type: 'GET_USERS',
            payload: json.data,
        });
    };
}

export function getUser(id) {
    return async function (dispatch) {
        var json = await axios.get(`${baseURL}/api/v1/user/${id}`);
        console.log(json.data);
        return dispatch({
            type: 'GET_USER',
            payload: json.data,
        });
    };
}

export function deleteUser(id) {
    return async function (dispatch) {
        var json = await axios.delete('${baseURL}/api/v1/user' + id);
        console.log(json.data);
        return dispatch({
            type: 'DELETE_USER',
            payload: json.data,
        });
    };
}

export function updateUser(id, data) {
    return async function (dispatch) {
        var json = await axios.put(
            '${baseURL}/api/v1/user' + id,
            data
        );
        console.log(json.data);
        return dispatch({
            type: 'UPDATE_USER',
            payload: json.data,
        });
    };
}

export function postUser(id, data) {
    return async function (dispatch) {
        var json = await axios.post(
            '${baseURL}/api/v1/user' + id,
            data
        );
        console.log(json.data);
        return dispatch({
            type: 'POST_USER',
            payload: json.data,
        });
    };
}

export function logout() {
    return async function (dispatch) {
        return dispatch({
            type: 'LOGOUT',
            payload: {},
        });
    };
}

export function login(data) {
    return async function (dispatch) {
        var json = await axios.post(
            `${baseURL}/api/v1/auth/login`,
            data
        );
        console.log(json.data);
        return dispatch({
            type: 'LOGIN',
            payload: json.data.data,
        });
    };
}

export function getGrade (id) {
    return async function (dispatch) {
        var json = await axios.get("${baseURL}/api/v1/grade" + id);
        console.log(json.data)
        return dispatch({
            type: "GET_GRADE",
            payload: json.data,
        });
    };
}

