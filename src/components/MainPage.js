import React from 'react';
import MainPageFeaturedList from "./MainPageFeaturedList";

const FEATURED_RECIPES = [{
        label: "Low Fat",
        params: {
            q: "oil",
            diet: "low-fat"
        }
}]

const MainPage = ()=>{
    return(
        <div className="ui middle aligned divided list">
            {renderTagsList()}
        </div>
    );

}

const renderTagsList = () =>{
    return FEATURED_RECIPES.map((featuredRecipe) =>{
        let params = {
            q:"chicken"
        }
        return(
            <div className="item">
                {/*<h1>{featuredRecipe.label}</h1>*/}
                <MainPageFeaturedList params ={featuredRecipe.params}/>
            </div>
        );
    })
}



export default MainPage;