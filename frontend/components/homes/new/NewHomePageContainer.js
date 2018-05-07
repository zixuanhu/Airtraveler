import { connect } from "react-redux";
import NewHomePage from "./NewHomePage";
import * as homeActions from "../../../actions/homeActions";

export const mapStateToProps = state => {
    return {};
};

export const mapDispatchToProps = dispatch => {
    return {
        createhome: homeData => {
            return dispatch(homeActions.createhome(homeData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewHomePage);
