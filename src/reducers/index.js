import { combineReducers} from "redux";

import authReducers from './authReducers'
import spoonacularApiReducer from "./spoonacularApiReducer";

export default combineReducers({
    auth:  authReducers,
    spoonacularApi: spoonacularApiReducer
})