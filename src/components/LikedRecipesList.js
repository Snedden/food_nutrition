import React from 'react';
import { connect} from 'react-redux';

import { selectRecipe, likeUnlikeRecipe} from "../actions";
import RecipeModal from "./RecipeModal";
import {Grid} from "semantic-ui-react";



const LikeRecipesList = ({
                        user
                    }) => {

    const isRecipeLiked = (recipeUri) => {
        let likedRecipe;
        if(user){
            likedRecipe =  user.likedRecipes.find((entry)=>{
                return  entry.recipe.uri === recipeUri
            })
        }


        if(likedRecipe===undefined){
            return false
        }
        return true;
    }

    if(!user){
        return (<span>fetching..</span>)
    }

    return(
        <div>
            <h2>Liked Recipes</h2>
            <Grid container style={{justifyContent: "center"}} >
                {renderResultList(user.likedRecipes, isRecipeLiked)}
            </Grid>
        </div>
    );
};





const renderResultList = (list, isRecipeLiked) => {

    if(list){
        return list.map(item=>{
            //console.log('item', item)
            return(
                <Grid.Column
                    className={'item'}
                    key={item.recipe.uri}
                    style={{paddingRight:0, paddingTop:0, width:"fit-content"}}>
                    <RecipeModal
                        item = {item}
                        isRecipeLiked = {(uri)=>isRecipeLiked(uri)}/>
                </Grid.Column>

            )
        })
    }
}

const mapStateToProps = (state) => {
    return{
        searchResult:state.spoonacularApi.searchResult,
        selectedRecipe: state.spoonacularApi.selectedRecipe,
        token: state.auth.user?state.auth.user.token:null,
        user: state.auth.user
    }
};

export default connect(mapStateToProps,{ selectRecipe, likeUnlikeRecipe}) (LikeRecipesList);