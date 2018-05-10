import { connect } from "react-redux";
import * as authActions from "../../actions/authActions";
import * as userActions from "../../actions/userActions";
import userProfile from "./userProfile";

export const mapStateToProps = state => {
    // debugger;
    return {
        user: state.auth.user
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        findUser: id => {
            return dispatch(userActions.findUser(id));
        },
        checkExist: (username, email) => {
            const userData = { username: username, email, email };
            return dispatch(authActions.checkExist(userData));
        },
        editProfile: userData => {
            return dispatch(userActions.editProfile(userData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(userProfile);
