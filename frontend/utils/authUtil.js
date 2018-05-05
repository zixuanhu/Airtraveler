import axios from "axios";
export const UPDATE_User = "UPDATE_User";
export const signupUtil = userData => {
    return axios.post("/api/auth/signup", userData);
};

export const loginUtil = userData => {
    return axios.post("/api/auth/login", userData);
};

export const checkUtil = userData => {
    return axios.post("/api/auth/checkexists", userData);
};

export const findUserUtil = userData => {
    return axios.post("/api/auth/finduserexists", userData);
};

export const editProfileUtil = userData => {
    return axios.post("/api/auth/editprofile", userData);
};
