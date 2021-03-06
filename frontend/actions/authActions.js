import * as AuthApiUtil from "../utils/authUtil";
import jwtDecode from "jwt-decode";

export const setCurrentUser = user => {
    //debugger;
    return {
        type: AuthApiUtil.SET_CURRENT_USER,
        user
    };
};

export const signup = userData => {
    return dispatch => {
        return AuthApiUtil.signupUtil(userData);
    };
};

export const login = userData => {
    return dispatch => {
        return AuthApiUtil.loginUtil(userData).then(respond => {
            if ("error" in respond.data) {
                return respond.data.error;
            } else {
                const token = respond.data.token;
                const userInfo = jwtDecode(token);
                localStorage.setItem("jwtToken", token);
                dispatch(setCurrentUser(userInfo));
            }
        });
    };
};

export const logout = () => {
    return dispatch => {
        return AuthApiUtil.logoutUtil().then(() => {
            localStorage.clear();
            dispatch(setCurrentUser({}));
        });
    };
};

export const checkExist = userData => {
    return dispatch => {
        return AuthApiUtil.checkUtil(userData);
    };
};
