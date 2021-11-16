import React from 'react';
import Login from './../../components/auth';
import {login} from './../../redux/actions/auth'
import { useDispatch } from 'react-redux';


const LoginContainer=()=>{
  const dispatch=useDispatch();
const onSubmit=data=>{
  dispatch(login(data));
}
  return ( <Login onSubmit={onSubmit} />)
}
export default LoginContainer;