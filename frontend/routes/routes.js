import React from "react";
import {Route, IndexRoute} from "react-router";
import Root from "../components/Root";
import HomepageContainer from "../components/homepage/HomepageContainer";
import NewHomeContainer from "../components/homes/new/NewHomePageContainer";
import HomeDetailPageContainer from "../components/homes/detail/detail_index/HomeDetailPageContainer";
import HomeEditPageContainer from "../components/homes/edit/HomeEditPageContainer";
import ManageHomePageContainer from "../components/manage/ManageHomePageContainer";
import IndexHomeContainer from "../components/homes/index/IndexHomePageContainer";
import IndexTripPageContainer from "../components/trips/index/IndexTripPageContainer";
import DetailTripPageContainer from "../components/trips/detail/DetailTripPageContainer";
// import UserProfileContainer from "../components/userprofile/UserProfileContainer";
// import SignUpContainer from "../components/signup/SignUpContainer";
import LoginContainer from "../components/login";

export default (
    <Route path="/" component={Root}>
        <IndexRoute component={HomepageContainer}/>
        <Route path="/homes/new" component={NewHomeContainer}/>
        <Route path="/homes/:home_id" component={HomeDetailPageContainer}/>
        <Route path="/homes/:home_id/edit" component={HomeEditPageContainer}/>
        <Route path="/manage/:user_id" component={ManageHomePageContainer}/>
        <Route path="/homes" component={IndexHomeContainer}/>
        <Route path="/trips/:user_id" component={IndexTripPageContainer}/>
        <Route path="/trip/:trip_id" component={DetailTripPageContainer}/>
        {/* <Route
            path="/userprofile/:identifer"
            component={UserProfileContainer}
        /> */}
        {/*<Route path="/login" component={LoginContainer}/>*/}
        {/* <Route path="/signup" component={SignUpContainer} /> */}
    </Route>
);
