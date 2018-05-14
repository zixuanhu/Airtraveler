import axios from "axios";


export const GET_User = "GET_User";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const findUserUtil = user_id => {
    return axios.get(`/api/user/${user_id}`);
};

export const editProfileUtil = userData => {
    return axios.put("/api/user/editprofile", userData);
};
