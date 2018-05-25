import axios from "axios";

export const UPDATE_TRIPS = "UPDATE_TRIPS";
export const newtripUtil = tripData => {
    debugger
    return axios.post("/api/trips/newtrip", tripData);
};

export const gettripUtil = guest_id => {
    return axios.get(`/api/trips/${guest_id}`);
};
