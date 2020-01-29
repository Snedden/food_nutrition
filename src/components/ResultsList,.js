import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import queryString from 'query-string';

import RecipeItem from "./RecipeItem";
import {searchRecipes} from "../actions";



const ResultList = ({location, searchRecipes, searchResult}) => {
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
                {renderResultList(searchResult)}
            </div>
        </div>
    );
};



const renderResultList = (list) => {
    console.log('list',list)
    if(list){
        return list.map(item=>{
            console.log('item', item)
            return(
                <RecipeItem
                    key={item.recipe.uri}
                    recipe={item.recipe}
                />
            )
        })
    }
}

const mapStateToProps = (state) => {
    return{
        searchResult:state.spoonacularApi.searchResult
    }
};

export default connect(mapStateToProps,{searchRecipes}) (ResultList);