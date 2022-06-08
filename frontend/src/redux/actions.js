import axios from 'axios';

axios.defaults.baseURL =
    import.meta.env.VITE_APP_API || 'http://localhost:5000/api/v1';

export function getUsers() {
    return async function (dispatch) {
        var json = await axios.get('/user');
        console.log(json.data);
        return dispatch({
            type: 'GET_USERS',
            payload: json.data,
        });
    };
}

export function getUser(id) {
    return async function (dispatch) {
        var json = await axios.get(`/user/${id}`);
        console.log(json.data);
        return dispatch({
            type: 'GET_USER',
            payload: json.data,
        });
    };
}

export function deleteUser(id) {
    return async function (dispatch) {
        var json = await axios.delete(`/user/${id}`);
        console.log(json.data);
        return dispatch({
            type: 'DELETE_USER',
            payload: json.data,
        });
    };
}

export function updateUser(id, data) {
    return async function (dispatch) {
        var json = await axios.put(`/user/${id}`, data);
        console.log(json.data);
        return dispatch({
            type: 'UPDATE_USER',
            payload: json.data,
        });
    };
}

export function postUser(id, data) {
    return async function (dispatch) {
        var json = await axios.post(`/user/${id}`, data);
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

export function login({ email, password, role }) {
    console.log(email);
    let data = { email, password };
    return async function (dispatch) {
        var json = await axios.post(`/auth/login`, data);
        const resRole = json.data.data.user.role;
        if (resRole != role) {
            if (resRole != 'admin') {
                throw new Error('Incorrect role');
            }
        }
        return dispatch({
            type: 'LOGIN',
            payload: json.data.data,
        });
    };
}

export function getGrade(id) {
    return async function (dispatch) {
        var json = await axios.get(`/grade/${id}`);
        console.log(json.data);
        return dispatch({
            type: 'GET_GRADE',
            payload: json.data,
        });
    };
}

export function getCourses(id) {
    return async function (dispatch) {
        var json = await axios.get(`/user/${id}`);
        console.log(json.data.data);
        return dispatch({
            type: 'GET_USER_COURSES',
            payload: json.data.data.user.courses,
        });
    };
}
