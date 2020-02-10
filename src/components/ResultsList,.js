import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import queryString from 'query-string';
import {Button, Header, Icon, Image, Modal} from "semantic-ui-react";

import RecipeItem from "./RecipeItem";
import {searchRecipes, selectRecipe} from "../actions";
import RecipeDetails from "./RecipeDetails";



const ResultList = ({location, searchRecipes, searchResult, selectRecipe}) => {
    useEffect(() =>{
        const values = queryString.parse(location.search)
        let params = {
            q:values.query
        }
        searchRecipes(params);
    },[location.search]);

    return(
        <div>
            <h2>Results</h2>
            <div className="ui celled list">
                {renderResultList(searchResult, selectRecipe)}
            </div>
        </div>
    );
};



const renderResultList = (list, selectRecipe) => {
    console.log('list',list)
    if(list){
        return list.map(item=>{
            console.log('item', item)
            return(
                <div
                    className={'item'}
                    key={item.recipe.uri}
                    onClick={() => selectRecipe(item.recipe)}
                >
                    <Modal trigger={
                        <RecipeItem
                            recipe={item.recipe}
                        />
                    }>
                        <Modal.Header>Profile Picture</Modal.Header>
                        <Modal.Content image scrolling>
                            <RecipeDetails/>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button primary>
                                Proceed <Icon name='chevron right' />
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>

            )
        })
    }
}

const mapStateToProps = (state) => {
    return{
        searchResult:state.spoonacularApi.searchResult
    }
};

export default connect(mapStateToProps,{searchRecipes, selectRecipe}) (ResultList);