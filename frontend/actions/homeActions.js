import * as homeApiUtil from "../utils/homeUtil";

export const updateHomes = homes => {
    return {
        type: homeApiUtil.UPDATE_HOMELIST,
        homes
    };
};
export const updateHome = home => {
    return {
        type: homeApiUtil.UPDATE_HOME,
        home
    };
};
export const createhome = homeData => {
    return dispatch => {
        debugger;
        return homeApiUtil.createhomeUtil(homeData);
    };
};
export const edithome = homeData => {
    return dispatch => {
        return homeApiUtil.edithomeUtil(homeData);
    };
};
export const homelist = () => {
    return dispatch => {
        return homeApiUtil.homelistUtil().then(respond => {
            const homes = respond.data.homes;
            dispatch(updateHomes(homes));
        });
    };
};
export const userhomelist = id => {
    return dispatch => {
        return homeApiUtil.userhomelist(id).then(respond => {
            const homes = respond.data;
            dispatch(updateHomes(homes));
        });
    };
};

export const gethome = home_id => {
    return dispatch => {
        return homeApiUtil.gethomeUtil(home_id).then(respond => {
            const home = respond.data.home;
            dispatch(updateHome(home));
        });
    };
};
