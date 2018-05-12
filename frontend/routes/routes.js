import React from "react";
import { Route, IndexRoute } from "react-router";
import Root from "../components/Root";
import HomepageContainer from "../components/homepage/HomepageContainer";
import SignUpContainer from "../components/signup/SignUpContainer";
import LoginContainer from "../components/login/LoginContainer";
import authorizedContainer from "../components/authorized/authoriedContainer";
import UserProfileContainer from "../components/userprofile/UserProfileContainer";
import NewHomeContainer from "../components/homes/new/NewHomePageContainer";
import IndexHomeContainer from "../components/homes/index/IndexHomePageContainer";
import HomeDetailPageContainer from "../components/homes/homedetailpage/HomeDetailPageContainer";
import hostmanagerContainer from "../components/hostmanager/hostmanagerlist/hostmanagerContainer";
import homemanagereditContainer from "../components/hostmanager/homemanageredit/homemanagereditContainer";
export default (
    <Route path="/" component={Root}>
        <IndexRoute component={HomepageContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route
            path="/authoried/:authitem/:identifer"
            component={authorizedContainer}
        />
        <Route
            path="/userprofile/:identifer"
            component={UserProfileContainer}
        />
        <Route path="/newhome" component={NewHomeContainer} />
        <Route path="/homes" component={IndexHomeContainer} />
        <Route
            path="/homedetail/:home_id"
            component={HomeDetailPageContainer}
        />
        <Route path="/manage/:user_id" component={hostmanagerContainer} />
        <Route path="/homeedit/:home_id" component={homemanagereditContainer} />
    </Route>
);
