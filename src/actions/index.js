import spoonacular from "../api/spoonacular";
import edamam from '../api/edamam';
import {
    LIKE_UNLIKE_PROCESSED,
    LIKE_UNLIKE_REQUESTED, LIKED_RECIPES_FETCHED,
    RECIPE_INFO_FETCHED,
    RECIPE_INFO_REQUESTED, RECIPE_SELECTED,
    RECIPE_SUMMARY_FETCHED,
    RECIPE_SUMMARY_REQUESTED, SAVE_TOKEN,
    SEARCH_DONE,
    SEARCH_REQUESTED, SET_GOOGLE_AUTH,
    SIGN_IN,
    SIGN_OUT
} from "./types";

const handleError = (error) =>{
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);
    return {
        data:{
            error:true
        }
    }
}

export const signIn = (token) => async dispatch =>{
    const response = await edamam.post('/login',{},{
        headers: {
            'token':token
        }
    }).catch( (error) => handleError(error));
    if(!response.data.error){
        response.data.token = token;
        response.data.isSignedIn = true;
        dispatch({
            type: SIGN_IN,
            payload: response.data
        });
    }

};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const searchRecipes = (params, token) => async dispatch => {
    dispatch({
        type: SEARCH_REQUESTED
    })
    let headers;
    if (token){
        headers =  {
            'token':token
        }
    }else{
        headers = {}
    }

    const response = await edamam.get('/searchRecipes',
        {params,headers},
        ).catch( (error) => handleError(error));
    console.log('response', response);
    dispatch({
        type: SEARCH_DONE,
        payload: response.data.hits
    })
}


export const likeUnlikeRecipe = (data, token) => async dispatch => {


    dispatch ({
        type: LIKE_UNLIKE_REQUESTED
    })
    const response = await edamam.post('/likerecipe',
        {
            'action':data.action,
            'recipe':data.recipe
        },
        {
            headers: {
                'token':token
            }
        }).catch( (error) => handleError(error));
    if(response.data.error){
        alert("Error like recipe")
    }
    dispatch({
        type: LIKE_UNLIKE_PROCESSED,
        payload: response.data
    });
}


export const selectRecipe = (recipe, evt) => dispatch =>{

    console.log('dispatched', recipe);
    dispatch({
        type: RECIPE_SELECTED,
        payload: recipe
    });
}

export const setGoogleAuth = (auth) =>{
    return{
        type: SET_GOOGLE_AUTH,
        payload: auth
    }
}

