import * as tripApiUtil from "../utils/tripUtil";

export const updateTrips = trips => {
    return {
        type: tripApiUtil.UPDATE_TRIPS,
        trips
    };
};


export const newtrip = tripData => {
    return dispatch => {
        return tripApiUtil.newtripUtil(tripData);
    };
};

export const gettrips = guest_id => {
    return dispatch => {
        return tripApiUtil.gettripUtil(guest_id).then(respond => {
            const trips = respond.data;

            dispatch(updateTrips(trips));
        });
    };
};