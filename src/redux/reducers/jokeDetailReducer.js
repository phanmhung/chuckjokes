import { JOKES_TYPE } from '../actions/jokeActions';

const jokeDetailReducer = (state = { detail: {} }, action) => {
    switch (action.type) {
      case JOKES_TYPE.LOADING_JOKE_BY_ID:
        return Object.assign({}, state, {
          loading: true,
          error: null,
          detail: {},
        });
      case JOKES_TYPE.GET_JOKE_BY_ID:
        return Object.assign({}, state, {
          loading: false,
          detail: action.payload,
          error: null,
        });
      default:
        return state;
    }
  }
  
  export default jokeDetailReducer;