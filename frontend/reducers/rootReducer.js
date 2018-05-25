import {combineReducers} from "redux";
import auth from "./authReducer";
import home from "./homeReducer";
import user from './userReducer';
import trip from './tripReducer';

export default combineReducers({
    auth,
    home,
    user,
    trip
});
