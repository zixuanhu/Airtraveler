import axios from "axios";

export const usernamecheckerUtil = username => {
    return axios.post("/api/usernamechecker/checker", { username: username });
};
