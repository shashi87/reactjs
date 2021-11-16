import {actionCreator,callApi} from './../../../utils';
import * as CONSTANTS from './../../../constants/actionTypes';
import * as API_URLS from './../../../constants/apiUrl';

export const login=(data)=>{
    console.log('data in action',data)
    return (dispatch,getState)=>{
        dispatch(actionCreator(CONSTANTS.LOGIN.REQUEST))
        callApi(getState,'POST',API_URLS.LOGIN,data,false).then(res=>{
            console.log(res,'api response')
        }).catch(err=>{
            console.log(err,'errrrrr')
            dispatch(actionCreator(CONSTANTS.LOGIN.FAILURE))
        })
    }
}   