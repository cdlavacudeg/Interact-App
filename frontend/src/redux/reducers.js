
const initialState = { 
    users : [],
    user: [],
    events: [],
    event: [],
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        // USERS 
        case 'GET_USERS':
            return { 
                ...state,
                users: action.payload
            }
            case 'GET_USER':
                return {
                    ...state,
                    user: action.payload
                }
            case 'DELETE_USER': 
                return {
                    ...state,
                    users: state.users.filter(user => user.id !== action.payload.id)
                }   
            case 'UPDATE_USER': 
                return {
                    ...state,
                    users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
                }
            case 'POST_USER':
                return {
                    ...state,
                    users: [...state.users, action.payload]
                }   
             case 'LOGOUT': 
                return {    
                    ...state,
                    user: []
                }
              case 'LOGIN':
                return { 
                    ...state,
                    user: action.payload
                }
                //EVETS
                case 'GET_EVENTS':
                    return {
                        ...state,
                        events: action.payload
                    }
                case 'GET_EVENT':
                    return {
                    ...state,
                    event: action.payload
                      }
                case 'DELETE_EVENT':
                    return {
                    ...state,
                    events: state.events.filter(event => event.id !== action.payload.id)
                        }
                case 'UPDATE_EVENT':
                    return {
                    ...state,
                    events: state.events.map(event => event.id === action.payload.id ? action.payload : event)
                        }
                case 'POST_EVENT':
                    return {
                    ...state,
                    events: [...state.events, action.payload]
                        }
        default:    
            return state;
                    
    };
}

export default rootReducer;