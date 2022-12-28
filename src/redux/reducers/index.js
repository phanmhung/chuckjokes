import { combineReducers } from "redux";
import jokesReducer from "./jokesReducer";
import categoriesReducer from "./categoriesReducer";

const allReducers= combineReducers({
    jokesReducer: jokesReducer,
    categoriesReducer: categoriesReducer,
});
export default allReducers;