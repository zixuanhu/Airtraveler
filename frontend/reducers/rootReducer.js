import {combineReducers} from "redux";
import auth from "./authReducer";
import home from "./homeReducer";
import user from './userReducer';

export default combineReducers({
    auth,
    home,
    user
});
