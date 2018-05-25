import * as homeUtil from "../utils/homeUtil";

const homeDefaultState = {
    homes: {}
};

export default (state = homeDefaultState, action = {}) => {
    Object.freeze(state);

    switch (action.type) {
        case homeUtil.UPDATE_HOMELIST:
            const homes = action.homes;
            const newHomelistState = Object.assign({}, state, {homes: homes});
            return newHomelistState;
        case homeUtil.UPDATE_HOME:
            const home = action.home;
            const newHomeState = Object.assign({}, state, {home: home});
            return newHomeState;
        default:
            return state;
    }
};
