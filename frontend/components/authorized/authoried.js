import React from "react";
class authorised extends React.Component {
    componentWillMount() {
        this.props.findUser(this.props.routeParams.identifer);
        setTimeout(() => {
            this.context.router.push("/");
        }, 5000);
    }
    userInfo() {
        const user = this.props.user;
        return (
            <div className="container-fluid well span6">
                <div className="row-fluid">
                    <div className="span8">
                        <h3>{user.username}</h3>
                        <h6>{user.email}</h6>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        const authitem = this.props.routeParams.authitem;
        if (authitem === "login") {
            return (
                <div>
                    {this.userInfo()}
                    <div>
                        Your browser should automatically take you to homepage
                        in 5 seconds
                    </div>
                    <div>log in succeeed</div>
                </div>
            );
        } else {
            return (
                <div>
                    {this.userInfo()}
                    <div>
                        Your browser should automatically take you to homepage
                        in 5 seconds
                    </div>
                    <div>sign up succeed</div>
                </div>
            );
        }
    }
}

authorised.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default authorised;
