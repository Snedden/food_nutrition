import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import queryString from 'query-string';

import {searchRecipes, selectRecipe, likeUnlikeRecipe} from "../actions";
import RecipeModal from "./RecipeModal";



const ResultList = ({
                        location,
                        searchRecipes,
                        searchResult,
                        token,
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

    useEffect(() =>{
        if(true){
            const values = queryString.parse(location.search)
            let params = {
                q:values.query
            }
            searchRecipes(params, token);
        }
    },[location.search, token]);

    return(
        <div>
            <h2>Results</h2>
            <div className="ui celled list" >
                {renderResultList(searchResult,  isRecipeLiked)}
            </div>
        </div>
    );
};





const renderResultList = (list, isRecipeLiked) => {

    //console.log('list',list)
    if(list){
        return list.map(item=>{
            //console.log('item', item)
            return(
                <div
                    className={'item'}
                    key={item.recipe.uri}
                    style={{paddingRight:0, paddingTop:0}}
                >
                    <RecipeModal
                        item = {item}
                        isRecipeLiked = {(uri)=>isRecipeLiked(uri)}/>
                </div>

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

export default connect(mapStateToProps,{searchRecipes, selectRecipe, likeUnlikeRecipe}) (ResultList);