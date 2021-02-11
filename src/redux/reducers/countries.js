import { GET_COUNTRIES, GET_COUNTRIES_ERROR,  GET_COUNTRIES_LOADER} from "../constants";

const initialState = {
    countries: [],
    error: null,
    countryLoading: false
}

const countryReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countryLoading: false,
                error: null
            }

        case GET_COUNTRIES_ERROR:
            return {
                ...state,
                error: payload,
                countryLoading: false
            }
        case GET_COUNTRIES_LOADER: 
            return {
                ...state,
                countries: [],
                countryLoading: true
            }
        default:
            return state;
    }
}

export default countryReducer;