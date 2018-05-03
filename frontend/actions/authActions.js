import * as AuthApiUtil from "../utils/authUtil";

export const signup = userData => {
    return dispatch => {
        return AuthApiUtil.signupUtil(userData);
    };
};
