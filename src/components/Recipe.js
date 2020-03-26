/*
import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import {getRecipeSummary, getRecipeInfo} from "../actions";

const Recipe = ({
                    match,
                    recipeSummary,
                    recipeInfo,
                    getRecipeSummary,
                    getRecipeInfo,
                    fetchingSummary,
                    fetchingInfo,
                }) => {

    useEffect(() => {
        let id = match.params.id;
        getRecipeSummary(id);
        getRecipeInfo(id);
    },[match.params.id]);



    return(
        <div>
            <div className="ui grid">
                <div className="two column row">
                    <div  className="column">
                        <div>
                            <div className={fetchingSummary?'ui active loader':'ui active'}></div>
                            {(recipeSummary && !fetchingSummary)?renderSummary(recipeSummary):''}
                        </div>
                    </div>
                    <div className="column">
                        <div className={fetchingInfo?'ui active loader':'ui active'}></div>
                        {(recipeInfo && !fetchingInfo)?renderImage(recipeInfo.image):''}
                    </div>
                </div>
                <div className="one column row">
                    <div className="column">
                        <div className="ui horizontal list">
                            {(recipeInfo && !fetchingInfo)?renderIngredients(recipeInfo.extendedIngredients):''}
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className="column">
                        <h1> Directions</h1>
                        <p >
                            {(recipeInfo && !fetchingInfo)?recipeInfo.instructions:''}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

const renderSummary = (recipeSummary) =>{
    return (
    <div>
        <h2 className="ui header">{recipeSummary.title}</h2>
        <div className="description">
            <p dangerouslySetInnerHTML={{ __html: recipeSummary.summary}} >
            </p>
        </div>
    </div>);
}

const renderImage = (recipeImageUrl) =>{
    return(
        <img className="ui fluid image" src={recipeImageUrl}/>
    );
}

const renderIngredients= (ingredients)=>{
    return ingredients.map((ingredient) =>{
        let ingredientUrl = `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`;
        return(
            <div className="item" key={ingredient.id}>
                <img className="ui avatar image" src={ingredientUrl} alt='Ingredient'/>
                <div className="content">
                    <div className="header">{ingredient.name}</div>
                    {ingredient.originalString}
                </div>
            </div>
        );
    })
}

export const mapStateToProps = (state)=>{
    return{
        recipeSummary: state.spoonacularApi.recipeSummary,
        recipeInfo: state.spoonacularApi.recipeInfo,
        fetchingSummary: state.spoonacularApi.fetchingSummary,
        fetchingInfo: state.spoonacularApi.fetchingInfo
    }
}

export default connect(mapStateToProps,{getRecipeSummary, getRecipeInfo}) (Recipe);*/
