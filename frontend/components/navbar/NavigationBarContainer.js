import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import * as authActions from "../../actions/authActions";

export const mapStateToProps = state => {
    return {
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
        error: state.auth.error
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            return dispatch(authActions.logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
