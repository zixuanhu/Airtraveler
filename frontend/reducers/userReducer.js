import * as userUtil from "../utils/userUtil";

const userDefaultState = {
    user: {}
};

export default (state = userDefaultState, action = {}) => {
    Object.freeze(state);

    switch (action.type) {
        case userUtil.GET_User:
            const newUserObj = {
                user: action.user
            };

            const newUserState = Object.assign({}, state, newUserObj);
            return newUserState;


        default:
            return userDefaultState;
    }
};