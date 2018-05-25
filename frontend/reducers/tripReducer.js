import * as tripUtil from "../utils/tripUtil";

const tripsDefaultState = {
    trips: {}
};

export default (state = tripsDefaultState, action = {}) => {
    Object.freeze(state);

    switch (action.type) {
        case  tripUtil.UPDATE_TRIPS:
            const newTripObj = {
                trips: action.trips
            };
            const newTripState = Object.assign({}, state, newTripObj);
            return newTripState;

        default:
            return tripsDefaultState;
    }
};