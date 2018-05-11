import { connect } from "react-redux";
import hostmanger from "./hostmanager";
import * as homeActions from "../../../actions/homeActions";

export const mapStateToProps = state => {
    return {
        homes: state.home.homes
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        homeList: id => {
            return dispatch(homeActions.userhomelist(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(hostmanger);
