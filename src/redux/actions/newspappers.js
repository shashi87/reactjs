import { 
    GET_NEWSPAPPERS, 
    GET_NEWSPAPPERS_ERROR,  
    GET_NEWSPAPPERS_LOADER
} from "../constants";
import { newspapperApi } from "../../api-client";
export const getNewspapper = (cityId, countryId, stateId) => async (dispatch) => {
    try{
        dispatch({
            type: GET_NEWSPAPPERS_LOADER
        })
        const data = await newspapperApi.get(cityId, countryId, stateId);
        dispatch({
            type: GET_NEWSPAPPERS,
            payload: data.data
        })
    }catch(err){
        dispatch({
            type: GET_NEWSPAPPERS_ERROR,
            payload: { msg: err }
        })
    }
}