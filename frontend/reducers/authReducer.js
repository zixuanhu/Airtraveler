import * as authUtil from "../utils/authUtil";
import isEmpty from "lodash/isEmpty";

const authDefaultState = {
    isAuthenticated: false,
    user: {},
    error: ""
};

export default (state = authDefaultState, action = {}) => {
    Object.freeze(state);

    switch (action.type) {
        case authUtil.SET_CURRENT_USER:
            const newAuthObj = {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
            const newAuthState = Object.assign({}, state, newAuthObj);
            return newAuthState;

        default:
            return state;
    }
};
