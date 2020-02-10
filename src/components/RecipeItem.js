import './RecipeItem.css';
import React from 'react';
import { connect } from 'react-redux';

import { selectRecipe} from "../actions";

const RecipeItem = ({recipe, selectRecipe, ...rest}) => {
    //see issue https://github.com/Semantic-Org/Semantic-UI-React/issues/2487 on why we add rest
    let baseUrl = 'https://spoonacular.com/recipeImages/';

    let defaultImage = process.env.PUBLIC_URL + '/recipe-default-image.png';
    let imageUrl = recipe.image? recipe.image: defaultImage;

     let addDefaultSrc = (e) => {
         e.target.src= defaultImage;
    }
    
    return (
        <div {...rest}>
            <div
                className="recipe-item item"
                onError={(e) => addDefaultSrc(e)}
                onClick={() => selectRecipe(recipe)}
            >
                <img
                    alt={defaultImage}
                    className="ui image"
                    src={imageUrl}
                />
                <div className="content">
                    <div className="header">{recipe.label}</div>
                    <div>
                        <li>
                            {recipe.totalWeight} gms.
                        </li>
                        <li>
                            Serves {recipe.yield}.
                        </li>
                    </div>
                </div>
            </div>

        </div>

    );
};

const mapStateToProps = (state) =>{
    return {
        selectedrecipe: state.spoonacularApi.selectedRecipe
    }
}

export default connect(mapStateToProps,{selectRecipe})(RecipeItem);