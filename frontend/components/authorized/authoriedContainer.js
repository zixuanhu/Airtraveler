import { connect } from "react-redux";
import * as userActions from "../../actions/userActions";
import authorised from "./authoried";

export const mapStateToProps = state => {
    return {
        user: state.auth.user
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        findUser: id => {
            return dispatch(userActions.findUser(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(authorised);
