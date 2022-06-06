
const initialState = { 
    user : [],
    login: [],
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_USER':
            return { 
                ...state,
                user: action.payload
            }
            case 'POST_LOGIN':
                return {
                    ...state,
                    login: action.payload 
                }
        default:    
            return state;
                    
    };
}

export default rootReducer;