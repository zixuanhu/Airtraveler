import { connect } from "react-redux";
import * as authActions from "../../actions/authActions";
import userProfile from "./userProfile";

export const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        findUser: identifer => {
            return dispatch(authActions.findUser({ identifer: identifer }));
        },
        checkExist: (username, email) => {
            const userData = { username: username, email, email };
            return dispatch(authActions.checkExist(userData));
        },
        editProfile: userData => {
            return dispatch(authActions.editProfile(userData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(userProfile);
