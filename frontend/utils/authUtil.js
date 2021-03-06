import axios from "axios";
export const UPDATE_User = "UPDATE_User";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const signupUtil = userData => {
    return axios.post("/api/auth/signup", userData);
};

export const loginUtil = userData => {
    return axios.post("/api/auth/login", userData);
};

export const logoutUtil = () => {
    return new Promise((res, rej) => {
        res();
    });
};

export const checkUtil = userData => {
    return axios.post("/api/auth/checkexists", userData);
};
