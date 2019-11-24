import spoonacular from "../api/spoonacular";
import {SEARCH_DONE, SEARCH_REQUESTED, SIGN_IN, SIGN_OUT} from "./types";
import history from '../history';

export const signIn = () =>{
    return {
        type: SIGN_IN
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const searchRecipes = (params) => async dispatch => {
    dispatch({
        type: SEARCH_REQUESTED
    })
    const response = await spoonacular.get('/recipes/search', {params});
    dispatch({
        type: SEARCH_DONE,
        payload: response.data.results
    })
}