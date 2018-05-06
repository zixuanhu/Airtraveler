import React from "react";
class authorised extends React.Component {
    componentWillMount() {
        this.props.findUser(this.props.routeParams.identifer);
    }
    userProfile() {
        setTimeout(() => {
            this.context.router.push("/");
        }, 5000);
        return (
            <div>
                <div className="container-fluid well span6">
                    <div className="row-fluid">
                        <div className="span8">
                            <h3>{this.props.user.username}</h3>
                            <h6>{this.props.user.email}</h6>
                        </div>
                    </div>
                </div>
                <div>
                    Your browser should automatically take you to homepage in 5
                    seconds
                </div>
            </div>
        );
    }
    render() {
        const authitem = this.props.routeParams.authitem;

        if (authitem === "login") {
            return (
                <div>
                    {this.userProfile()}

                    <div>log in succeeed</div>
                </div>
            );
        } else if (authitem === "signup") {
            return (
                <div>
                    {this.userProfile()}

                    <div>sign up succeed</div>
                </div>
            );
        } else if (authitem === "userProfile") {
            return (
                <div>
                    {this.userProfile()}
                    <div>upadate succeed</div>
                </div>
            );
        }
    }
}

authorised.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default authorised;
