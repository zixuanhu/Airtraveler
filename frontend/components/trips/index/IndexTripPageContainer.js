import {connect} from "react-redux";
import IndexTripPage from "./IndexTripPage";
import * as tripActions from "../../../actions/tripActions";

export const mapStateToProps = state => {

    return {
        user: state.auth.user,
        trips: state.trip.trips,
        error: state.auth.error
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getTrips: guest_id => {
            return dispatch(tripActions.gettrips(guest_id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexTripPage);