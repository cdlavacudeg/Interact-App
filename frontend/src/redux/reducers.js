const localStorage = window.localStorage.getItem('loggedAppUser')
    ? JSON.parse(window.localStorage.getItem('loggedAppUser'))
    : undefined;

const localCourses = window.localStorage.getItem('courses')
    ? JSON.parse(window.localStorage.getItem('courses'))
    : undefined;
const localGrades = window.localStorage.getItem('grades')
    ? JSON.parse(window.localStorage.getItem('grades'))
    : undefined;

const initialState = {
    users: [],
    user: localStorage ? localStorage : {},
    events: [],
    event: [],
    grade: localGrades ? localGrades : [],
    grades: [],
    courses: localCourses ? localCourses : [],
    notifications: [],
    profile: {},
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        // USERS
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
            };
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(
                    (user) => user.id !== action.payload.id
                ),
            };
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                ),
            };
        case 'POST_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case 'LOGOUT':
            return {
                ...state,
                user: {},
            };
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            };
        //EVETS
        case 'GET_EVENTS':
            return {
                ...state,
                events: action.payload,
            };
        case 'GET_EVENT':
            return {
                ...state,
                event: action.payload,
            };
        case 'DELETE_EVENT':
            return {
                ...state,
                events: state.events.filter(
                    (event) => event.id !== action.payload.id
                ),
            };
        case 'UPDATE_EVENT':
            return {
                ...state,
                events: state.events.map((event) =>
                    event.id === action.payload.id ? action.payload : event
                ),
            };
        case 'POST_EVENT':
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        //GRADES
        case 'GET_GRADES':
            return {
                ...state,
                grades: action.payload,
            };
        case 'GET_GRADE':
            return {
                ...state,
                grades: action.payload,
            };
        case 'DELETE_GRADE':
            return {
                ...state,
                grades: state.grades.filter(
                    (grade) => grade.id !== action.payload.id
                ),
            };
        case 'UPDATE_GRADE':
            return {
                ...state,
                grades: state.grades.map((grade) =>
                    grade.id === action.payload.id ? action.payload : grade
                ),
            };
        case 'POST_GRADE':
            return {
                ...state,
                grades: [...state.grades, action.payload],
            };
        //Courses
        case 'GET_USER_COURSES':
            return {
                ...state,
                courses: action.payload,
            };

        //Notifications
        case 'GET_NOTIFICATIONS':
            return {
                ...state,
                notifications: action.payload,
            };

        // Profile
        case 'GET_PROFILE':
            return {
                ...state,
                profile: action.payload,
            };

        default:
            return state;
    }
}

export default rootReducer;
