import { connect } from "react-redux";
import SignUp from "./SignUp";
import * as authActions from "../../actions/authActions";

export const mapStateToProps = state => {
    return {};
};

export const mapDispatchToProps = dispatch => {
    return {
        signup: userData => {
            return dispatch(authActions.signup(userData));
        },
        checkExist: username => {
            return dispatch(authActions.checkExist(username));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
