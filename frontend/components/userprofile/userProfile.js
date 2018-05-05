import React from "react";
import classnames from "classnames";
class userProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            username: "",
            email: "",
            editing: false,
            errors: {}
        };
    }

    submitForm() {
        if (this.state.username === "") {
            let errors = {};
            errors.username = "the username cannot be empty";
            this.setState({
                errors: errors
            });
        }
        if (
            this.state.username.includes(
                "@" || "#" || " " || "$" || "%" || "^" || "+" || "-" || "="
            )
        ) {
            let errors = this.state.errors;
            errors.username =
                "please DO NOT includes special symbols like (@ # $ ^ * ) or space in username";
            this.setState({
                errors: errors
            });
            return;
        }
        if (!this.state.email.includes("@")) {
            let errors = this.state.errors;
            errors.email = "the email is invalid";
            this.setState({
                errors: errors
            });
            return;
        }
        let readyToSubmit = true;
        this.props
            .checkExist(this.state.username, this.state.email)
            .then(respond => {
                if (
                    respond.data.usernameexist &&
                    this.state.username !== this.props.user.username
                ) {
                    let errors = this.state.errors;
                    errors.username =
                        "this username is existed, please choose another one";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }
                if (
                    respond.data.emailexist &&
                    this.state.email !== this.props.user.email
                ) {
                    let errors = this.state.errors;
                    errors.email =
                        "this email is existed, please choose another one";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }
                debugger;
                if (readyToSubmit) {
                    let obj = {};
                    obj.oldusername = this.state.user.username;
                    obj.username = this.state.username;
                    obj.email = this.state.email;

                    this.props
                        .editProfile(obj)
                        .then(() =>
                            this.context.router.push(
                                `/authoried/editProfile/${this.state.username}`
                            )
                        );
                }
            });
    }
    componentWillMount() {
        this.props.findUser(this.props.routeParams.identifer).then(() =>
            this.setState({
                user: this.props.user,
                username: this.props.user.username,
                email: this.props.user.email
            })
        );
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    editProfile() {
        return (
            <div className="container">
                <h2>Please Edit</h2>
                <br />
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.username
                            })}
                        >
                            <label className="control-label">Username</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.username && (
                                <span className="help-block">
                                    {this.state.errors.username}
                                </span>
                            )}
                        </div>

                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.email
                            })}
                        >
                            <label className="control-label">Email</label>
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.email && (
                                <span className="help-block">
                                    {this.state.errors.email}
                                </span>
                            )}
                        </div>

                        <button
                            className="btn btn-primary"
                            onClick={() => this.submitForm()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    userProfile() {
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
        if (!this.state.editing) {
            return (
                <div>
                    {this.userProfile()}
                    <div>
                        <a onClick={() => this.setState({ editing: true })}>
                            click here to edit Profile
                        </a>
                    </div>
                </div>
            );
        } else {
            return <div>{this.editProfile()}</div>;
        }
    }
}

userProfile.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default userProfile;
