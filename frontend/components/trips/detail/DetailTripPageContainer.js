import {connect} from "react-redux";
import DetailTripPage from "./DetailTripPage";
import * as tripActions from "../../../actions/tripActions";
import * as userActions from '../../../actions/userActions';

export const mapStateToProps = state => {

    return {
        host: state.user.user,
        user: state.auth.user,
        trip: state.trip.trip,
        error: state.auth.error
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getTrip: trip_id => {
            return dispatch(tripActions.gettrip(trip_id));
        },
        deletetrip: trip_id => {
            return dispatch(tripActions.deletetrip(trip_id));
        },
        getUser: user_id => {
            return dispatch(userActions.findUser(user_id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailTripPage);