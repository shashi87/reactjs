import { GET_CITIES, GET_CITIES_ERROR,  GET_CITIES_LOADER} from "../constants";

const initialState = {
    cities: [],
    error: null,
    cityLoading: true
}

const cityReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case GET_CITIES:
            return {
                ...state,
                cities: payload,
                cityLoading: false,
                error: null
            }

        case GET_CITIES_ERROR:
            return {
                ...state,
                error: payload,
                cityLoading: false
            }
        case GET_CITIES_LOADER: 
            return {
                ...state,
                cities: [],
                cityLoading: true
            }
        default:
            return state;
    }
}

export default cityReducer;