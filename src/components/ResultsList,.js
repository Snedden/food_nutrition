import React, {useEffect} from 'react';
import { connect} from 'react-redux';
import queryString from 'query-string';

import RecipeItem from "./RecipeItem";
import {searchRecipes} from "../actions";



const ResultList = (props) => {
    useEffect(() =>{
        const values = queryString.parse(props.location.search)
        let params = {
            diet:'',
            excludeIngredients:'',
            intolerances:'',
            number:10,
            offset:0,
            type:'main course',
            query:values.query
        }
        props.searchRecipes(params)
    },[props.location.search]);

    return(
        <div>
            <h2>Results</h2>
            <div className="ui celled list">
                {renderResultList(props.searchResult)}
            </div>
        </div>
    );
};



const renderResultList = (list) => {
    console.log('list',list)
    if(list){
        return list.map(item=>{
            return(
                <RecipeItem
                    key={item.id}
                    recipe={item}
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