import { GET_CITIES, GET_CITIES_ERROR,  GET_CITIES_LOADER} from "../constants";
import { cityApi } from "../../api-client";
export const getCities = (stateId, countryId) => async (dispatch) => {
    try{
        dispatch({
            type: GET_CITIES_LOADER
        })
        const data = await cityApi.get(stateId, countryId);
        dispatch({
            type: GET_CITIES,
            payload: data.data
        })
    } catch(err){
        dispatch({
            type: GET_CITIES_ERROR,
            payload: { msg: err }
        })
    }
}