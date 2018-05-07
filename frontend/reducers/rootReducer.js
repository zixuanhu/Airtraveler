import { combineReducers } from "redux";
import auth from "./authReducer";
import home from "./homeReducer";

export default combineReducers({
    auth,
    home
});
