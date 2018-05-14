import { connect } from "react-redux";
import HomeEditPage from "./HomeEditPage";
import * as homeActions from "../../../actions/homeActions";

export const mapStateToProps = state => {
    return { home: state.home.home };
};

export const mapDispatchToProps = dispatch => {
    return {
        gethome: home_id => {
            return dispatch(homeActions.gethome(home_id));
        },
        edithome: homeData => {
            return dispatch(homeActions.edithome(homeData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeEditPage);
