import axios from 'axios'
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const BASIC_AUTH=process.env.REACT_APP_BASIC_AUTH;
export const actionCreator = (type, payload) => {
    return {
        type, payload
    }
}

export const headers = (getState,isPrivate=false) => {
    let header = {
        'content-type': 'application/json',
        Authorization: BASIC_AUTH,

    };
    header.accessToken=isPrivate?`${getState().auth.loginData ? getState().auth.loginData.token : ''}`:null;
    return header;
}
export const callApi = (getState, method = "GET",url = '', data = {}, isPrivateHeaders = true) => {
    let httpRequest = {
        method,
        data,
        headers: headers(getState,isPrivateHeaders),
        url,
        validateStatus: function (status) {
            return status < 500; // Reject only if the status code is greater than or equal to 500
        }
    };
    return axios(httpRequest);
}

export const createActionTypes = (base) => {
    return [REQUEST, SUCCESS, FAILURE].reduce((current, nextVal) => {
        current[nextVal] = base + "_" + nextVal;
        return current;
    }, {})
}

export const isLogin=()=>{
    return true
}