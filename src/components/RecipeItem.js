import './RecipeItem.css';
import React from 'react';

import history from '../history';

const RecipeItem = ({ recipe}) => {
    let baseUrl = 'https://spoonacular.com/recipeImages/';
    let imageUrl = baseUrl + recipe.image
    return (
        <div  className="recipe-item item" onClick={() =>history.push(`/recipe/${recipe.id}`)}>
            <img
                alt={recipe.title}
                className="ui image"
                src={imageUrl}
            />
            <div className="content">
                <div className="header">{recipe.title}</div>
                <div>
                    <li>
                        Ready in {recipe.readyInMinutes} minutes.
                    </li>
                    <li>
                        Serves {recipe.servings}.
                    </li>
                </div>
            </div>
        </div>
    );
};

export default RecipeItem;