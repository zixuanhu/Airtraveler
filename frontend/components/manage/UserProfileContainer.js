import { connect } from "react-redux";
import * as authActions from "../../actions/authActions";
import * as userActions from "../../actions/userActions";
import UserProfile from "./UserProfile";

export const mapStateToProps = state => {
    return {
        user: state.user.user
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        findUser: id => {
            return dispatch(userActions.findUser(id));
        },
        checkExist: (username, email) => {
            const userData = { username: username, email: email };
            return dispatch(authActions.checkExist(userData));
        },
        editProfile: userData => {
            return dispatch(userActions.editProfile(userData));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
