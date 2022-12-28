import {JOKES_TYPE} from '../actions/jokeActions';

const categoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case JOKES_TYPE.LOADING_CATEGORIES:
            return Object.assign({}, state, {
                loading: true,
                error: null,
                categories: [],
            });
        case JOKES_TYPE.GET_CATEGORIES:
            return Object.assign({}, state, {
                loading: false,
                categories: action.payload,
                error: null,
            });
        default:
            return state;
    }
}

export default categoriesReducer