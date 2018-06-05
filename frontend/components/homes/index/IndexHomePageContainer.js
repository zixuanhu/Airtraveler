import { connect } from "react-redux";
import IndexHomePage from "./IndexHomePage";
import * as homeActions from "../../../actions/homeActions";

export const mapStateToProps = state => {
    return {
        homes: state.home.homes
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        searchhomes: searchinfo => {
            return dispatch(homeActions.searchhomes(searchinfo));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexHomePage);
