import axios from "axios";

export const signupUtil = userData => {
    return axios.post("/api/auth/signup", userData);
};
