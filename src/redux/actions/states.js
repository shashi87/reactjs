import { GET_STATES, GET_STATES_ERROR,  GET_STATES_LOADER} from "../constants";
import { stateApi } from "../../api-client";
export const getStates = (countryId) => async (dispatch) => {
    try{
        dispatch({
            type: GET_STATES_LOADER
        })
        const data = await stateApi.get(countryId);
        dispatch({
            type: GET_STATES,
            payload: data.data
        })
    }catch(err){
        dispatch({
            type: GET_STATES_ERROR,
            payload: { msg: err }
        })
    }
}
