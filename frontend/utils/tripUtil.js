import axios from "axios";

export const UPDATE_TRIPS = "UPDATE_TRIPS";
export const UPDATE_TRIP = "UPDATE_TRIP";
export const newtripUtil = tripData => {
    return axios.post("/api/trips/newtrip", tripData);
};
export const deletetripUtil = trip_id => {
    return axios.get(`/api/trips/delete/${trip_id}`);
};

export const gettripsUtil = guest_id => {
    return axios.get(`/api/trips/${guest_id}`);
};
export const gettripUtil = trip_id => {
    return axios.get(`/api/trips/gettrip/${trip_id}`);
};
