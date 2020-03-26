
const Utils = ()=>{
    const isRecipeLiked = (likedRecipes, recipeUri) => {
        let likedRecipe =  likedRecipes.find((recipe)=> recipe.uri === recipeUri)

        return likedRecipe!=null
    }
}

export default Utils