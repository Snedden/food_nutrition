import spoonacular from "../api/spoonacular";
import edamam from '../api/edamam';
import {
    RECIPE_INFO_FETCHED,
    RECIPE_INFO_REQUESTED, RECIPE_LIST_FETCHED, RECIPE_LIST_REQUESTED,
    RECIPE_SUMMARY_FETCHED,
    RECIPE_SUMMARY_REQUESTED,
    SEARCH_DONE,
    SEARCH_REQUESTED,
    SIGN_IN,
    SIGN_OUT
} from "./types";

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
    const response = await edamam.get('/searchRecipes', {params});
    console.log('response', response);
    dispatch({
        type: SEARCH_DONE,
        payload: response.data.hits
    })
}

export const getRecipeSummary = (id) => async dispatch => {
    dispatch({
        type: RECIPE_SUMMARY_REQUESTED
    })
    const response = await spoonacular(`recipes/${id}/summary`);
    dispatch({
        type: RECIPE_SUMMARY_FETCHED,
        payload: response.data
    })
}

export const getRecipeInfo = (id) => async dispatch => {
    dispatch({
        type: RECIPE_INFO_REQUESTED
    })
    const response = await spoonacular(`recipes/${id}/information`);
    dispatch({
        type: RECIPE_INFO_FETCHED,
        payload: response
    })
}

/*
export const getRecipeBy = ({params}) => async dispatch => {
    dispatch({
        type: RECIPE_LIST_REQUESTED
    })
    const response = await spoonacular(`recipes/${id}/information`);
    dispatch({
        type: RECIPE_LIST_FETCHED,
        payload: response
    })
}*/
