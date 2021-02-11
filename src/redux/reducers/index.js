import { combineReducers } from "redux";
import user from "./user";
import countries from "./countries";
import states from "./states";
import cities from "./cities";
import newspappers from "./newspappers";

export default combineReducers({ 
    user,
    countries,
    states,
    cities,
    newspappers
});