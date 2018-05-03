import React from "react";
import { Route, IndexRoute } from "react-router";
import Root from "../components/Root";
import HomepageContainer from "../components/homepage/HomepageContainer";
import signUpContainer from "../components/signUp/signUpContainer";
import logInContainer from "../components/logIn/logInContainer";

export default (
    <Route path="/" component={Root}>
        <IndexRoute component={HomepageContainer} />
        <Route path="/signup" component={signUpContainer} />
        <Route path="/login" component={logInContainer} />
    </Route>
);
