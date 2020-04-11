

import React, {useEffect} from 'react';
import { connect} from 'react-redux';

import {searchRecipes, selectRecipe, likeUnlikeRecipe} from "../actions";
import RecipeModal from "./RecipeModal";
import {Card, Grid, Icon, Image} from 'semantic-ui-react'



const MainPageFeaturedList = ({
                        searchRecipes,
                        searchResult,
                        token,
                        user,
                        params
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

    useEffect(() =>{
        if(true){
            searchRecipes(params, token);
        }
    },[]);

    return(
        <div>
            <h2>Featured</h2>
            <Grid container style={{justifyContent: "center"}} >
                {renderResultList(searchResult,  isRecipeLiked)}
            </Grid>
        </div>
    );
};





const renderResultList = (list, isRecipeLiked) => {

    if(list){
        return list.map(item=>{
            return(
                <Grid.Column
                    className={'item'}
                    key={item.recipe.uri}
                    style={{paddingRight:0, paddingTop:0, width:"fit-content"}}>
                    <RecipeModal
                        key={item.recipe.uri}
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
export {MainPageFeaturedList};

export default connect(mapStateToProps,{searchRecipes, selectRecipe, likeUnlikeRecipe}) (MainPageFeaturedList);