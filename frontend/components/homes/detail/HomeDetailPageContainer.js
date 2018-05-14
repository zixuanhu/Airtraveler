import { connect } from "react-redux";
import HomeDetailPage from "./HomeDetailPage";
import * as homeActions from "../../../actions/homeActions";

export const mapStateToProps = state => {
    return {
        home: state.home.home
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        gethome: home_id => {
            return dispatch(homeActions.gethome(home_id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetailPage);
