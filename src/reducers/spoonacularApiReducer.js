import {SEARCH_DONE, SEARCH_REQUESTED} from "../actions/types";

export default (state = {searching:false}, action) => {
    switch (action.type) {
        case SEARCH_DONE:
            return {...state, searchResult: action.payload, searching:false};
        case SEARCH_REQUESTED:
            return {...state, searching: true}
        default:
            return state;
    }
}