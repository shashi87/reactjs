import axios from "axios";
import country from "./country";
import state from "./state";
import city from "./city";
import newspapper from "./newspapper";
var axiosApi = axios.create({
  baseURL: 'https://stage.newspaperarchive.com/'
});
export const countryApi = country(axiosApi);
export const stateApi = state(axiosApi);
export const cityApi = city(axiosApi);
export const newspapperApi = newspapper(axiosApi);