import { GET_NEWSPAPPERS, GET_NEWSPAPPERS_ERROR,  GET_NEWSPAPPERS_LOADER} from "../constants";

const initialState = {
    newspappers: [],
    error: null,
    newspapperLoading: true
}

const newspapperReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case GET_NEWSPAPPERS:
            return {
                ...state,
                newspappers: payload,
                newspapperLoading: false,
                error: null
            }

        case GET_NEWSPAPPERS_ERROR:
            return {
                ...state,
                error: payload,
                newspapperLoading: false
            }
        case GET_NEWSPAPPERS_LOADER: 
            return {
                ...state,
                newspappers: [],
                newspapperLoading: true
            }
        default:
            return state;
    }
}

export default newspapperReducer;