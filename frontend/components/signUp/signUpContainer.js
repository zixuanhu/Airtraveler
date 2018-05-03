import { connect } from "react-redux";
import signUp from "./signUp";
import * as authActions from "../../actions/authActions";
import * as usernamecheckerAction from "../../actions/usernamecheckerAction";

export const mapStateToProps = state => {
    return {};
};

export const mapDispatchToProps = dispatch => {
    return {
        signup: userData => {
            return dispatch(authActions.signup(userData));
        },
        checkusername: username => {
            return dispatch(usernamecheckerAction.usernamechecker(username));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(signUp);
