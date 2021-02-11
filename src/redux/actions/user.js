import { GET_USER, USER_ERROR } from "../constants";

export const getUser = () => async (dispatch) => {
    try{
        const res = {
            data: "USER"
        }

        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: USER_ERROR,
            payload: { msg: err }
        })
    }
}