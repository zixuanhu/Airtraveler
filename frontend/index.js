// frontend index.js
import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import routes from "./routes/routes";
import store from "./store/store";
import * as AuthApiUtil from "./utils/authUtil";
import * as authActions from "./actions/authActions";
import jwtDecode from "jwt-decode";

if (localStorage.jwtToken) {
    store.dispatch(
        authActions.setCurrentUser(jwtDecode(localStorage.jwtToken))
    );
}

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById("root")
);
