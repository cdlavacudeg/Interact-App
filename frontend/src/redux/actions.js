import axios from 'axios';

axios.defaults.baseURL =
    import.meta.env.VITE_APP_API || 'http://localhost:5000/api/v1';

//=============================
//           USER
//=============================
export function getUsers() {
    return async function (dispatch) {
        var json = await axios.get('/user');
        return dispatch({
            type: 'GET_USERS',
            payload: json.data.data.user,
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
        var json = await axios.put('/user' + id, data);
        console.log(json.data);
        return dispatch({
            type: 'UPDATE_USER',
            payload: json.data,
        });
    };
}

export function postUser(id, data) {
    return async function (dispatch) {
        var json = await axios.post('/user' + id, data);
        console.log(json.data);
        return dispatch({
            type: 'POST_USER',
            payload: json.data,
        });
    };
}

export function getProfile(user_id) {
    return async function (dispatch) {
        let user = await axios.get(`/user/${user_id}`);
        let courses_array = user.data.data.user.courses;

        const profile = [];
        await Promise.all(
            courses_array.map(async (course) => {
                await axios.get(`/course/${course._id}`).then((course_data) => {
                    let auxObjt = {
                        classmates:
                            course_data.data.data.course.students.filter(
                                (e) => e._id != user_id
                            ),
                        teacher: course_data.data.data.course.teacher,
                    };
                    auxObjt.teacher.course =
                        course_data.data.data.course.courseName;
                    profile.push(auxObjt);
                });
            })
        );
        let listStudents = [];
        let listTeachers = [];
        profile.map((obj) => {
            obj.classmates.map((e) => {
                if (!listStudents.includes(e.fullName)) {
                    listStudents.push(e.fullName);
                }
            });
            if (
                !listTeachers.some(
                    (teacher) => teacher.fullName == obj.teacher.fullName
                )
            ) {
                listTeachers.push(obj.teacher);
            }
        });

        return dispatch({
            type: 'GET_PROFILE',
            payload: { listStudents, listTeachers },
        });
    };
}

//============================
//         LOGIN
//============================

export function logout() {
    return async function (dispatch) {
        return dispatch({
            type: 'LOGOUT',
            payload: {},
        });
    };
}

export function login({ email, password, role }) {
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

//============================
//         GRADES
//============================

export function getGrade(courses_id, student_id) {
    return async function (dispatch) {
        let grades = await axios.get('/grade');
        grades = grades.data.data.grade;
        let studentGrades = [];
        courses_id.map((id) => {
            let gradesCourse = grades.filter(
                (grade) => grade.course_id._id == id
            )[0];

            if (gradesCourse.studentGrades) {
                let gradesList = gradesCourse.studentGrades.filter(
                    (objGrade) => objGrade.student_id === student_id
                )[0];

                if (gradesList) {
                    gradesList.grades.map((e) =>
                        studentGrades.push(
                            Object.assign(e, {
                                course: gradesCourse.course_id.courseName,
                            })
                        )
                    );
                }
            }
        });

        return dispatch({
            type: 'GET_GRADE',
            payload: studentGrades,
        });
    };
}

//============================
//         COURSES
//============================

export function getCourses(id) {
    return async function (dispatch) {
        var json = await axios.get(`/user/${id}`);
        window.localStorage.setItem(
            'courses',
            JSON.stringify(json.data.data.user.courses)
        );
        return dispatch({
            type: 'GET_USER_COURSES',
            payload: json.data.data.user.courses,
        });
    };
}

export function getCourseById(id) {
    return async function (dispacht) {
        let course = await axios.get(`/course/${id}`);
        course = course.data.data.course;

        return dispacht({
            type: 'GET_COURSE_ID',
            payload: course,
        });
    };
}
//============================
//       NOTIFICATIONS
//============================

export function getNotifications() {
    return async function (dispatch) {
        var json = await axios.get('/notification');
        return dispatch({
            type: 'GET_NOTIFICATIONS',
            payload: json.data.data.notification,
        });
    };
}

//============================
//       EVENTS
//============================

export function getEvents(courses_id) {
    return async function (dispatch) {
        let events = await axios.get('/event');
        events = events.data.data.event;
        events = events.filter(
            (event) =>
                courses_id.indexOf(event.course_id._id) != -1 &&
                event.events.length != 0
        );

        return dispatch({
            type: 'GET_EVENTS',
            payload: events,
        });
    };
}
