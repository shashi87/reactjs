import { GET_STATES, GET_STATES_ERROR,  GET_STATES_LOADER} from "../constants";

const initialState = {
    states: [],
    error: null,
    stateLoading: true
}

const stateReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case GET_STATES:
            return {
                ...state,
                states: payload,
                stateLoading: false,
                error: null
            }

        case GET_STATES_ERROR:
            return {
                ...state,
                error: payload,
                stateLoading: false
            }
        case GET_STATES_LOADER: 
            return {
                ...state,
                states: [],
                stateLoading: true
            }
        default:
            return state;
    }
}

export default stateReducer;