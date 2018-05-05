import * as AuthApiUtil from "../utils/authUtil";
export const updateUser = user => {
    return {
        type: AuthApiUtil.UPDATE_User,
        user
    };
};
export const updateLogIn = (username, error) => {
    return {
        type: AuthApiUtil.UPDATE_LogIn,
        logIn: true,
        logInusername: username,
        error: error
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
            dispatch(updateLogIn(respond.data.username, respond.data.error));
        });
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
        return AuthApiUtil.editProfileUtil(userData).then(respond => {
            dispatch(updateLogIn(respond.data.user.username, {}));
        });
    };
};
