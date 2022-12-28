import { JOKES_TYPE } from '../actions/jokeActions';

const jokesReducer = (state = { jokes: [] }, action) => {
  switch (action.type) {
    case JOKES_TYPE.LOADING_JOKES:
      return Object.assign({}, state, {
        loading: true,
        error: null,
        jokes: [],
      });
    case JOKES_TYPE.GET_ALL_JOKES:
      return Object.assign({}, state, {
        loading: false,
        jokes: action.payload.result,
        error: null,
      });
    default:
      return state;
  }
};

export default jokesReducer;
