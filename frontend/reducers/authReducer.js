import * as authUtil from "../utils/authUtil";
import isEmpty from "lodash/isEmpty";

const authDefaultState = {
    isAuthenticated: false,
    user: {},
    error: ""
};

export default (state = authDefaultState, action = {}) => {
    Object.freeze(state);
    let user;
    switch (action.type) {
        case authUtil.SET_CURRENT_USER:
            const newAuthObj = {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };

            const newAuthState = Object.assign({}, state, newAuthObj);
            return newAuthState;
        case authUtil.SET_AUTH_ERROR:
            const newAuthError = {
                error: action.error
            };
            const newErrorState = Object.assign({}, state, newAuthError);
            return newErrorState;
        case authUtil.UPDATE_User:
            const user = action.user;
            const newUserState = Object.assign({}, state, {
                user: user
            });
            return newUserState;

        default:
            return state;
    }
};
