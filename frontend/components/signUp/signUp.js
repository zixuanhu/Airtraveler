import React from "react";
import classnames from "classnames";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            password_confirm: "",
            errors: {}
        };
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // validUserName(username) {
    //     this.props.checkusername(username).then(respond => {
    //         debugger;
    //         return respond.data.exist;
    //     });
    // }

    submitForm() {
        // console.log(this.state);
        this.props.checkusername(this.state.username).then(respond => {
            debugger;
            if (respond.data.exist) {
                let errors = this.state.errors;
                errors.username =
                    "this username is existed, please choose another one";
                this.setState({
                    errors: errors
                });
            } else if (this.state.password !== this.state.password_confirm) {
                let errors = this.state.errors;
                errors.password_confirm = "Password does not match";
                this.setState({
                    errors: errors
                });
            } else if (!this.state.email.includes("@")) {
                let errors = this.state.errors;
                errors.email = "the emmail is invalid";
                this.setState({
                    errors: errors
                });
            } else {
                let obj = {};
                obj.username = this.state.username;
                obj.email = this.state.email;
                obj.password = this.state.password;
                debugger;
                this.props.signup(obj).then(() => {
                    console.log("create success");
                    this.context.router.push("/");
                });
            }
        });
    }

    render() {
        return (
            <div className="container">
                <h2>Please Sign Up</h2>
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
                                placeholder="Your Username"
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
                                placeholder="Your Email"
                                value={this.state.email}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.email && (
                                <span className="help-block">
                                    {this.state.errors.email}
                                </span>
                            )}
                        </div>

                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.password
                            })}
                        >
                            <label className="control-label">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.password && (
                                <span className="help-block">
                                    {this.state.errors.password}
                                </span>
                            )}
                        </div>

                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.password_confirm
                            })}
                        >
                            <label className="control-label">
                                Confirm Password
                            </label>
                            <input
                                className="form-control"
                                type="password"
                                name="password_confirm"
                                placeholder="Confirm Password"
                                value={this.state.password_confirm}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.password_confirm && (
                                <span className="help-block">
                                    {this.state.errors.password_confirm}
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
}

SignUp.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default SignUp;
