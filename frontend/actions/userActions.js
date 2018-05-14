import * as userApiUtil from "../utils/userUtil";
import jwtDecode from "jwt-decode";

export const getUser = user => {
    return {
        type: userApiUtil.GET_User,
        user
    };
};
export const setCurrentUser = user => {
    return {
        type: userApiUtil.SET_CURRENT_USER,
        user
    };
};
export const findUser = userData => {
    // debugger;
    return dispatch => {
        return userApiUtil.findUserUtil(userData).then(respond => {
            const token = respond.data.token;
            const user = jwtDecode(token);
            dispatch(getUser(user));
        });
    };
};

export const editProfile = userData => {
    return dispatch => {
        return userApiUtil.editProfileUtil(userData).then(respond => {
            const token = respond.data.token;
            const userInfo = jwtDecode(token);
            localStorage.setItem("jwtToken", token);
            dispatch(setCurrentUser(userInfo));
        });
    };
};
