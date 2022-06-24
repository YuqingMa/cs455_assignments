// combine reducers
import { combineReducers } from "redux";
import recipe from './dishes'

const rootReducer = combineReducers({
    recipe
});
export default rootReducer;