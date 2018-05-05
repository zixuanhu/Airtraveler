import * as authUtil from "../utils/authUtil";
const authDefaultState = {
    isAuthenticated: false,
    LogIn: false,
    user: {},
    logInusername: "",
    error: {}
};

export default (state = authDefaultState, action = {}) => {
    Object.freeze(state);
    let user;
    switch (action.type) {
        case authUtil.UPDATE_User:
            const user = action.user;
            const newUserState = Object.assign({}, state, {
                user: user
            });
            return newUserState;
        case authUtil.UPDATE_LogIn:
            const logInusername = action.logInusername;
            const error = action.error;
            const newLogInState = Object.assign({}, state, {
                LogIn: true,
                logInusername: logInusername,
                error: error
            });
            return newLogInState;
        default:
            return state;
    }
};
