import axios from "axios";

export const UPDATE_HOMELIST = "UPDATE_HOMELIST";
export const UPDATE_HOME = "UPDATE_HOME";
export const createhomeUtil = homeData => {
    return axios.post("/api/homes/create", homeData);
};

export const homelistUtil = () => {
    return axios.get("/api/homes/homelist");
};

export const gethomeUtil = home_id => {
    return axios.get(`/api/homes/${home_id}`);
};
