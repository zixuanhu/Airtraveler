import * as tripUtil from "../utils/tripUtil";

const tripsDefaultState = {
    trips: {}
};

export default (state = tripsDefaultState, action = {}) => {
    Object.freeze(state);

    switch (action.type) {
        case  tripUtil.UPDATE_TRIPS:
            const newTripsObj = {
                trips: action.trips
            };
            const newTripsState = Object.assign({}, state, newTripsObj);
            return newTripsState;
        case tripUtil.UPDATE_TRIP:
            const newTripObj = {
                trip: action.trip
            };

            const newTripState = Object.assign({}, state, newTripObj);
            return newTripState;

        default:
            return tripsDefaultState;
    }
};