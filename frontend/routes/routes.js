import React from "react";
import { Route, IndexRoute } from "react-router";
import Root from "../components/Root";
// import HomepageContainer from "../components/homepage/HomepageContainer";
// import SignUpContainer from "../components/signup/SignUpContainer";
// import LoginContainer from "../components/login/LoginContainer";

// import UserProfileContainer from "../components/userprofile/UserProfileContainer";
// import NewHomeContainer from "../components/homes/new/NewHomePageContainer";
// import IndexHomeContainer from "../components/homes/index/IndexHomePageContainer";
// import HomeDetailPageContainer from "../components/homes/detail/detail_index/HomeDetailPageContainer";
// import HomeEditPageContainer from "../components/homes/edit/HomeEditPageContainer";
// import ManageHomePageContainer from "../components/manage/ManageHomePageContainer";
// import IndexTripPageContainer from "../components/trips/index/IndexTripPageContainer";
// import DetailTripPageContainer from "../components/trips/detail/DetailTripPageContainer";

export default (
    <Route path="/" component={Root}>
        {/* <IndexRoute component={HomepageContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route
            path="/userprofile/:identifer"
            component={UserProfileContainer}
        />
        <Route path="/homes" component={IndexHomeContainer} />
        <Route path="/homes/new" component={NewHomeContainer} />
        <Route path="/homes/:home_id" component={HomeDetailPageContainer} />
        <Route path="/homes/:home_id/edit" component={HomeEditPageContainer} />
        <Route path="/manage/:user_id" component={ManageHomePageContainer} />
        <Route path="/trips/:user_id" components={IndexTripPageContainer} />
        <Route path="/trip/:trip_id" components={DetailTripPageContainer} /> */}
    </Route>
);
