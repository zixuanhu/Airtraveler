import {connect} from "react-redux";
import indexHomePage from "./indexHomePage";
import * as homeActions from "../../../actions/homeActions";

export const mapStateToProps = state => {

    return {
        homes: state.home.homes
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        homeList: () => {
            return dispatch(homeActions.homelist());
        },
        searchhomes: keyword => {
            return dispatch(homeActions.searchhomes(keyword));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(indexHomePage);
