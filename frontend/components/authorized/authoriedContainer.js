import { connect } from "react-redux";
import * as authActions from "../../actions/authActions";
import authorised from "./authoried";

export const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        findUser: identifer => {
            return dispatch(authActions.findUser({ identifer: identifer }));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(authorised);
