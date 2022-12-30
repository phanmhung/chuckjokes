import { URL_DETAILS } from "../../utils/fetchData";
import axios from "axios";

export const JOKES_TYPE = {
    GET_ALL_JOKES: "GET_ALL_JOKES",
    GET_CATEGORIES: "GET_CATEGORIES",
    GET_JOKE_BY_ID: "GET_JOKES_BY_ID",
    GET_JOKES_BY_SEARCH: "GET_JOKES_BY_SEARCH",
    LOADING_JOKES: "LOADING_JOKES",
    LOADING_CATEGORIES: "LOADING_CATEGORIES",
    LOADING_JOKE_BY_ID: "LOADING_JOKE_BY_ID",
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
            type: JOKES_TYPE.GET_ALL_JOKES,
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

  export const getJokeById = (_id) => {
    
    return (dispatch) => {
      const headers = {
        "Content-Type": "application/json"
      };
      dispatch({ type: JOKES_TYPE.LOADING_JOKE_BY_ID});
      axios
        .get(URL_DETAILS.getJokeById+`${_id}`, {
          headers: headers,
        })
        .then((response) => {
          dispatch({
            type: JOKES_TYPE.GET_JOKE_BY_ID,
            payload: response?.data,
          });
          
        })
        .catch((error) => {
          dispatch({
            type: JOKES_TYPE.LOADING_JOKE_BY_ID,
            payload: error?.response?.data
              ? error?.response?.data?.message
              : error?.message,
          });
        });
    };
  }