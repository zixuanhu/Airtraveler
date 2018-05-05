import { connect } from "react-redux";
import * as authActions from "../../actions/authActions";
import Login from "./Login";

export const mapStateToProps = state => {
    return {
        error: state.auth.error
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        login: userData => {
            return dispatch(authActions.login(userData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
