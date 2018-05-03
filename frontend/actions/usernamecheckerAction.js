import * as usernamecheckerUtil from "../utils/usernamecheckerUtil";

export const usernamechecker = username => {
    return dispatch => {
        return usernamecheckerUtil.usernamecheckerUtil(username);
    };
};
