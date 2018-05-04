import axios from "axios";
export const UPDATE_User = "UPDATE_User";
export const signupUtil = userData => {
    return axios.post("/api/auth/signup", userData);
};

export const loginUtil = userData => {
    return axios.post("/api/auth/login", userData);
};

export const checkUtil = username => {
    return axios.post("/api/auth/checkexists", { username: username });
};

export const findUserUtil = userData => {
    return axios.post("/api/auth/finduserexists", userData);
};
