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
        login: userData => {
            return dispatch(authActions.login(userData));
        },
        checkExist: (username, email) => {
            const userData = { username: username, email: email };
            return dispatch(authActions.checkExist(userData));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
