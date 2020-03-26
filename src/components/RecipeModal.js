import React from 'react';
import { connect} from 'react-redux';
import {Button, Header, Icon, Modal} from "semantic-ui-react";
import './RecipeModal.css';

import RecipeItem from "./RecipeItem";
import { likeUnlikeRecipe} from "../actions";
import RecipeDetails from "./RecipeDetails";

const recipeModal = ({
                     item,
                     isRecipeLiked,
                     selectedRecipe,
                     user,
                     likeUnlikeRecipe,
                     likeUnlikeRequested,
                     token,
                     googleAuth}) =>{
    const selectedRecipeUrl = selectedRecipe?selectedRecipe.url:'';
    const selectedRecipeUri = selectedRecipe?selectedRecipe.uri:'';

    const isSelectedRecipedLiked = () => {
        if(selectedRecipeUri){
            return isRecipeLiked(selectedRecipeUri);
        }
        return false;

    }

    const callLikeUnlikeRecipe = () => {
        if(!user){
            googleAuth.signIn()
        }
        else{
            const params = {
                action: null,
                recipe:selectedRecipe,
            }
            if(isSelectedRecipedLiked()){
                params.action = 'unlike';
            }else{
                params.action = 'like';
            }
            likeUnlikeRecipe(params, token);
        }

    }

    let likeIconClass = "heart icon";
    likeIconClass += isSelectedRecipedLiked(selectedRecipeUri)?" likedHeart":"" ;

    let likeButtonClass = "ui icon button";
    likeButtonClass += likeUnlikeRequested? " loading":"";


     return(
        <Modal  trigger={
                        <RecipeItem
                            recipe={item.recipe}
                            isRecipeLiked = {(uri)=>isRecipeLiked(uri)}
                        />
                    }>
            <Modal.Header>
                <a hidden={isRecipeLiked(selectedRecipeUri)}
                    className="ui right corner label"
                >
                    <i aria-hidden="true" className={likeIconClass}></i>
                </a>
                <Header>
                    {item.recipe.label}
                </Header>
            </Modal.Header>
            <Modal.Content image scrolling>
                <RecipeDetails/>
            </Modal.Content>
            <Modal.Actions>
                <div className="ui right labeled button" role="button" tabIndex="0">
                    <button className={likeButtonClass} onClick={()=>callLikeUnlikeRecipe()}>
                        <i aria-hidden="true" className={likeIconClass}></i>
                        {isSelectedRecipedLiked()?'Unlike':'Like'}
                    </button>
                    <a className="ui red left pointing basic label">2,048</a>
                </div>

                <Button tabIndex="1" onClick={() => window.open(selectedRecipeUrl,item.recipe.uri)} primary>
                    Full Recipe <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
        </Modal>
     )



}


const mapStateToProps = (state) =>{
    return{
        selectedRecipe: state.spoonacularApi.selectedRecipe,
        user: state.auth.user,
        token: state.auth.user?state.auth.user.token:null,
        likeUnlikeRequested:state.auth.user? state.auth.user.likeUnlikeRequested:true,
        googleAuth: state.auth.googleAuth
    }
}

export default connect(mapStateToProps, {likeUnlikeRecipe}) (recipeModal);