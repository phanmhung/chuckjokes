import { URL_DETAILS } from "../../utils/fetchData";
import axios from "axios";

export const JOKES_TYPE = {
    GET_ALL_JOKES: "GET_ALL_JOKES",
    GET_CATEGORIES: "GET_CATEGORIES",
    GET_JOKES_BY_CATEGORY: "GET_JOKES_BY_CATEGORY",
    GET_JOKES_BY_SEARCH: "GET_JOKES_BY_SEARCH",
    GET_JOKES_BY_RANDOM: "GET_JOKES_BY_RANDOM",
    LOADING_JOKES: "LOADING_JOKES",
    LOADING_CATEGORIES: "LOADING_CATEGORIES",
}

export const getAllJokes = () => {
    return (dispatch) => {
      const headers = {
        "Content-Type": "application/json"
      };
      dispatch({ type: JOKES_TYPE.LOADING_JOKES});
      axios
        .get(URL_DETAILS.getAllJokes, {
          headers: headers,
        })
        .then((response) => {
          dispatch({
            type: JOKES_TYPE.GET_JOKES,
            payload: response?.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: JOKES_TYPE.LOADING_JOKES,
            payload: error?.response?.data
              ? error?.response?.data?.message
              : error?.message,
          });
        });
    };
  }

  export const getCategories = () => {
    return (dispatch) => {
      const headers = {
        "Content-Type": "application/json"
      };
      dispatch({ type: JOKES_TYPE.LOADING_CATEGORIES});
      axios
        .get(URL_DETAILS.getCategories, {
          headers: headers,
        })
        .then((response) => {
          dispatch({
            type: JOKES_TYPE.GET_CATEGORIES,
            payload: response?.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: JOKES_TYPE.LOADING_CATEGORIES,
            payload: error?.response?.data
              ? error?.response?.data?.message
              : error?.message,
          });
        });
    };
  }