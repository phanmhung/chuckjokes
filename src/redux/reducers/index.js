import { combineReducers } from "redux";
import jokesReducer from "./jokesReducer";
import categoriesReducer from "./categoriesReducer";
import jokeDetailReducer from "./jokeDetailReducer";
const allReducers= combineReducers({
    jokesReducer: jokesReducer,
    categoriesReducer: categoriesReducer,
    jokeDetailReducer: jokeDetailReducer
});
export default allReducers;