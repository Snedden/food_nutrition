import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import NavBar from "./NavBar";
import ResultList from "./ResultsList";
import history from '../history';
import MainPage from "./MainPage";
import LikedRecipesList from "./LikedRecipesList";

const App = () =>{
    return (
        <div className='ui container'>
            <Router history={history}>
            <NavBar/>
            <Switch>
                <Route path={`/search`} component={ResultList}/>
                <Route path={`/likedRecipes`} component={LikedRecipesList}/>
                <Route path={`/`} component={MainPage}/>
            </Switch>
            </Router>
        </div>
    )
}

export default App;