import axios from "axios";

export const UPDATE_HOMELIST = "UPDATE_HOMELIST";
export const UPDATE_HOME = "UPDATE_HOME";
export const createhomeUtil = homeData => {
    return axios.post("/api/homes/create", homeData);
};
export const edithomeUtil = homeData => {
    return axios.put("/api/manage/edithome", homeData);
};
export const homelistUtil = () => {
    return axios.get("/api/homes/homelist");
};
export const searchhomesUtil = keyword => {

    return axios.get(`/api/homes/searchhomelist/${keyword}`);
};
export const userhomelist = id => {
    return axios.get(`/api/manage/${id}`);
};

export const gethomeUtil = home_id => {
    return axios.get(`/api/homes/${home_id}`);
};
