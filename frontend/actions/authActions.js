import * as AuthApiUtil from "../utils/authUtil";
export const updateUser = user => {
    return {
        type: AuthApiUtil.UPDATE_User,
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
        return AuthApiUtil.loginUtil(userData);
    };
};

export const checkExist = userData => {
    return dispatch => {
        return AuthApiUtil.checkUtil(userData);
    };
};

export const findUser = userData => {
    return dispatch => {
        return AuthApiUtil.findUserUtil(userData).then(respond => {
            const user = respond.data.user;
            dispatch(updateUser(user));
        });
    };
};

export const editProfile = userData => {
    return dispatch => {
        return AuthApiUtil.editProfileUtil(userData);
    };
};
