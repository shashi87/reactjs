import { GET_USER, USER_ERROR } from "../constants";

const initialState = {
    user: null,
    error: null,
    userLoading: true
}

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case GET_USER:
            return {
                ...state,
                user: payload,
                userLoading: false
            }

        case USER_ERROR:
            return {
                ...state,
                error: payload,
                userLoading: false
            }
        
        default:
            return state;
    }
}

export default userReducer;