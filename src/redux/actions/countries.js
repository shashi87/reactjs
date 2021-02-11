import { 
    GET_COUNTRIES, 
    GET_COUNTRIES_ERROR,  
    GET_COUNTRIES_LOADER} from "../constants";
import { countryApi } from "../../api-client";
export const getCountries = () => async (dispatch) => {
    try{
        dispatch({
            type: GET_COUNTRIES_LOADER
        })
        const data = await countryApi.get();
        dispatch({
            type: GET_COUNTRIES,
            payload: data.data
        })
    }catch(err){
        dispatch({
            type: GET_COUNTRIES_ERROR,
            payload: { msg: err }
        })
    }
}