import * as authUtil from "../utils/authUtil";
const authDefaultState = {
    isAuthenticated: false,
    user: {}
};

export default (state = authDefaultState, action = {}) => {
    Object.freeze(state);
    let user;
    switch (action.type) {
        case authUtil.UPDATE_User:
            user = action.user;
            const newUserState = Object.assign({}, state, {
                user: user
            });
            return newUserState;
        default:
            return state;
    }
};
