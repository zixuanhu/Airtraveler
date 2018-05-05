import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";

export const mapStateToProps = state => {
    return {
        logInusername: state.auth.logInusername,
        LogIn: state.auth.LogIn
    };
};

export const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
