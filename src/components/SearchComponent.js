import React from 'react';
import { connect } from 'react-redux';
import history from '../history';

import {searchRecipes} from "../actions";

const SearchComponent = (props) => {
    const  onSearchEnter = async (e) =>{
        if(e.key === 'Enter'){
            history.push({
                    pathname:'/search',
                    search:'?' +new URLSearchParams({query:e.currentTarget.value}).toString()
                });
        }
    }

    return(
        <div>
            <div className={props.searching?'ui icon input loading':'ui icon input'}>
                <input onKeyDown={(e)=>onSearchEnter(e)}  type="text" placeholder="Search..."/>
                    <i className="search icon"></i>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        searching: state.spoonacularApi.searching
    }
}

export default connect(mapStateToProps,{searchRecipes})(SearchComponent);