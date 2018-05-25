import * as tripApiUtil from "../utils/tripUtil";

export const updateTrips = trips => {
    return {
        type: tripApiUtil.UPDATE_TRIPS,
        trips
    };
};

export const updateTrip = trip => {
    return {
        type: tripApiUtil.UPDATE_TRIP,
        trip
    };
};

export const newtrip = tripData => {
    return dispatch => {
        return tripApiUtil.newtripUtil(tripData);
    };
};
export const gettrip = trip_id => {
    return dispatch => {
        return tripApiUtil.gettripUtil(trip_id).then(respond => {
            const trip = respond.data.trip;
            dispatch(updateTrip(trip));
        });
    };
};

export const gettrips = guest_id => {
    return dispatch => {
        return tripApiUtil.gettripsUtil(guest_id).then(respond => {
            const trips = respond.data;

            dispatch(updateTrips(trips));
        });
    };
};