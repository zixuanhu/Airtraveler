import axios from "axios";

export const UPDATE_HOMELIST = "UPDATE_HOMELIST";
export const UPDATE_HOME = "UPDATE_HOME";
export const createhomeUtil = homeData => {
    return axios.post("/api/homes/create", homeData);
};
export const edithomeUtil = homeData => {
    return axios.put("/api/manage/edithome", homeData);
};

export const searchhomesUtil = searchinfo => {
    if (searchinfo.keyword) {
        return axios.get(`/api/homes/searchhomelist/${searchinfo.keyword}/${searchinfo.activePage}`);
    } else {
        return axios.get(`/api/homes/searchhomelist/${searchinfo.activePage}`);
    }
};
export const userhomelist = id => {
    return axios.get(`/api/manage/${id}`);
};

export const gethomeUtil = home_id => {
    return axios.get(`/api/homes/${home_id}`);
};
