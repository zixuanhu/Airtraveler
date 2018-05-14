import {connect} from "react-redux";
import HomeDetailPage from "./HomeDetailPage";
import * as homeActions from "../../../../actions/homeActions";
import * as userActions from "../../../../actions/userActions";

export const mapStateToProps = state => {

    return {
        home: state.home.home,
        user: state.user.user
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        gethome: home_id => {
            return dispatch(homeActions.gethome(home_id));
        },
        findUser: id => {
            return dispatch(userActions.findUser(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetailPage);