import './RecipeItem.css';
import React from 'react';

import history from '../history';

const RecipeItem = ({ recipe}) => {
    let baseUrl = 'https://spoonacular.com/recipeImages/';
    let imageUrl = recipe.image
    return (
        <div  className="recipe-item item" onClick={() =>history.push(`/recipe/${recipe.label}`)}>
            <img
                alt={recipe.label}
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
    );
};

export default RecipeItem;