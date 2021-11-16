import * as CONSTANTS from "./../../../constants/actionTypes";

const initialState={
   loading:false,
}

 const authReducer= (state=initialState,{type,payload})=>{
    switch(type){
        case CONSTANTS.LOGIN.REQUEST:
            return {
                ...state,loading:true
            }
            case CONSTANTS.LOGIN.SUCCESS:
                return {
                    ...state,loading:false
                }   
        default :
                return {
                    ...state
                }
    }
}
export default authReducer;