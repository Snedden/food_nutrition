import {
    LIKE_UNLIKE_PROCESSED, LIKE_UNLIKE_REQUESTED, LIKED_RECIPES_FETCHED, LIKED_RECIPES_REQUESTED,
    RECIPE_INFO_FETCHED,
    RECIPE_INFO_REQUESTED, RECIPE_SELECTED,
    RECIPE_SUMMARY_FETCHED,
    RECIPE_SUMMARY_REQUESTED,
    SEARCH_DONE,
    SEARCH_REQUESTED
} from "../actions/types";

import _ from 'lodash';



export default (state = {
    searching:false,
    fetchingSummary: false,
    fetchingInfo: false
}, action) => {
    switch (action.type) {
        case SEARCH_DONE:
            return {...state, searchResult: action.payload, searching:false};
        case SEARCH_REQUESTED:
            return {...state, searching: true};
        case RECIPE_SUMMARY_REQUESTED:
            return {...state, fetchingSummary: true};
        case RECIPE_SUMMARY_FETCHED:
            return {...state, recipeSummary: action.payload, fetchingSummary: false};
        case RECIPE_INFO_REQUESTED:
            return {...state, fetchingInfo: true};
        case RECIPE_INFO_FETCHED:
            return {...state, recipeInfo: action.payload.data, fetchingInfo: false};
        case RECIPE_SELECTED:
            return {...state, selectedRecipe: action.payload}
        default:
            return state;
    }
}