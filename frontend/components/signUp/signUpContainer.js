import { connect } from "react-redux";
import signUp from "./signUp";
import * as authActions from "../../actions/authActions";

export const mapStateToProps = state => {
    return {};
};

export const mapDispatchToProps = dispatch => {
    return {
        signup: userData => {
            return dispatch(authActions.signup(userData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(signUp);
