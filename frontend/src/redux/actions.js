import axios from 'axios';

const baseURL = import.meta.VITE_APP_BACKEND || '${baseURL}'
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
        var json = await axios.delete('/user' + id);
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
            '/user' + id,
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
            '/user' + id,
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
            `/auth/login`,
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
        var json = await axios.get("/grade" + id);
        console.log(json.data)
        return dispatch({
            type: "GET_GRADE",
            payload: json.data,
        });
    };
}

export function getGrades () {
    return async function (dispatch) {
        var json = await axios.get("/grade");
        console.log(json.data)
        return dispatch({
            type: "GET_GRADES",
            payload: json.data,
        });
    };
}

export function deleteGrade (id) {
    return async function (dispatch) {
        var json = await axios.delete("/grade" + id);
        console.log(json.data)
        return dispatch({
            type: "DELETE_GRADE",
            payload: json.data,
        });
    }
}

export function updateGrade (id, data) {
    return async function (dispatch) {
        var json = await axios.put("/grade" + id, data);
        console.log(json.data)
        return dispatch({
            type: "UPDATE_GRADE",
            payload: json.data,
        });
    }
}
export function postGrade (data) {
    return async function (dispatch) {
        var json = await axios.post("/grade", data);
        console.log(json.data)
        return dispatch({
            type: "POST_GRADE",
            payload: json.data,
        });
    }
}





export function getCourses ( ) {
    return async function (dispatch) {
        var json = await axios.get("/course");
        console.log(json.data)
        return dispatch({
            type: "GET_COURSES",
            payload: json.data,
        });
    };
}


export function getCourse (id) {
    return async function (dispatch) {
        var json = await axios.get("/course" + id);
        console.log(json.data)
        return dispatch({
            type: "GET_COURSE",
            payload: json.data,
        });
    };
}

export function deleteCourse (id) {
    return async function (dispatch) {
        var json = await axios.delete("/course" + id);
        console.log(json.data)
        return dispatch({
            type: "DELETE_COURSE",
            payload: json.data,
        });
    };
}

export function updateCourse (id, data) {
    return async function (dispatch) {
        var json = await axios.put("/course" + id, data);
        console.log(json.data)
        return dispatch({
            type: "UPDATE_COURSE",
            payload: json.data,
        });
    };
}

export function postCourse  (data) {
    return async function (dispatch) {
        var json = await axios.post("/course", data);
        console.log(json.data)
        return dispatch({
            type: "POST_COURSE",
            payload: json.data,
        });
    };
}



