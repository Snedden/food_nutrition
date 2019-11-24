import axios from 'axios';

export default axios.create({
    baseURL:'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    headers:{
        'Content-Type': 'application/json',
        'x-rapidapi-host':'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key':'4a1ddbf30cmshfd0f4f878658ca4p1817b2jsnbf5bb4dc45d8'
    }
})