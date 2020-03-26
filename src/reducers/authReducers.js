import {AUTH_INITILIAZED, LIKE_UNLIKE_PROCESSED, LIKE_UNLIKE_REQUESTED, SET_GOOGLE_AUTH} from "../actions/types";

let INTIAL_STATE = {
}


export default
(state = INTIAL_STATE, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return{
                ...state, user: action.payload
            }
        case 'SIGN_OUT':
            return {
                ...state, user: null

            }
        case LIKE_UNLIKE_PROCESSED:
            if(state.user) {
                state.user.likeUnlikeRequested = false;
                state.user.likedRecipes = action.payload.likedRecipes ? action.payload.likedRecipes : [];
            }
            let userClone = {};
            Object.assign(userClone, state.user)
            userClone.likeUnlikeRequested = false;
            userClone.likedRecipes = action.payload.likedRecipes ? action.payload.likedRecipes : [];
            return {
                ...state,
                user:userClone
            };
        case LIKE_UNLIKE_REQUESTED:
            let userClone2 = {};
            Object.assign(userClone2, state.user)
            userClone2.likeUnlikeRequested = true;
            if(state.user){
                return {
                    ...state,
                    user:userClone2
                }
            }else{
                state.googleAuth.signIn();
            }

        case AUTH_INITILIAZED:
            //Call this from google auth , load search results only when this is done
        case SET_GOOGLE_AUTH:
            state.googleAuth = action.payload
        default:
            return state;
    }
};