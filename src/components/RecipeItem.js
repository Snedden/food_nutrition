import './RecipeItem.css';
import React from 'react';
import { connect } from 'react-redux';

import { selectRecipe} from "../actions";
import { Card, Icon, Image } from 'semantic-ui-react'

const RecipeItem = ({recipe, selectRecipe,isRecipeLiked, ...rest}) => {

    let defaultImage = process.env.PUBLIC_URL + '/recipe-default-image.png';
    let imageUrl = recipe.image? recipe.image: defaultImage;

     let addDefaultSrc = (e) => {
         e.target.src= defaultImage;
    }



    let likeIconClass = "heart icon";
    likeIconClass += isRecipeLiked(recipe.uri)?" likedHeart":"" ;
    return (
/*        <div {...rest}>
            <div
                className="recipe-item item"
                onError={(e) => addDefaultSrc(e)}
                onClick={(e) => selectRecipe(recipe, e)}
            >

                <img
                    alt={defaultImage}
                    className="ui image"
                    src={imageUrl}
                />
                <div className="content">
                    <div className="header">{recipe.label}</div>
                    <span>{recipe.liked?'true':'false'}</span>
                    <div>
                        <li>
                            {recipe.totalWeight} gms.
                        </li>
                        <li>
                            Serves {recipe.yield}.
                        </li>
                    </div>
                </div>
                <div className="ui fluid image">
                    <a
                        className="ui right corner label"
                    >
                        <i aria-hidden="true" className={likeIconClass}></i>
                    </a>
                </div>
            </div>


        </div>*/

        <div {...rest}>
           <Card
                onError={(e) => addDefaultSrc(e)}
                onClick={(e) => selectRecipe(recipe, e)}>
                <Image src={imageUrl} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{recipe.label}</Card.Header>
                    <Card.Meta>{recipe.liked?<i aria-hidden="true" className={likeIconClass}></i>:''}</Card.Meta>
                    <Card.Description>
                        <div>
                            <li>
                                {recipe.totalWeight} gms.
                            </li>
                            <li>
                                Serves {recipe.yield}.
                            </li>
                        </div>
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>


    );
};

const mapStateToProps = (state) =>{
    return {
        selectedrecipe: state.spoonacularApi.selectedRecipe
    }
}

export default connect(mapStateToProps,{selectRecipe})(RecipeItem);