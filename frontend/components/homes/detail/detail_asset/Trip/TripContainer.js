import {connect} from "react-redux";
import Trip from "./Trip";
import * as homeActions from "../../../../../actions/homeActions";
import * as tripActions from "../../../../../actions/tripActions";


export const mapStateToProps = state => {

    return {
        curUser: state.auth.user,
        home: state.home.home,
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        gethome: home_id => {
            return dispatch(homeActions.gethome(home_id));
        },
        newtrip: tripData => {
            return dispatch(tripActions.newtrip(tripData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trip);