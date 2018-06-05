import React from "react";
import classnames from "classnames";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: "",
            password: "",
            errors: {}
        };
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitForm() {
        this.setState({
            errors: {}
        });
        const loginData = {
            identifier: this.state.identifier,
            password: this.state.password
        };
        if (loginData.identifier === "") {
            let errors = {};
            errors.identifier = "the username cannot be empty";
            this.setState({
                errors: errors
            });
            return;
        }
        if (loginData.password === "") {
            let errors = {};
            errors.password = "the password cannot be empty";
            this.setState({
                errors: errors
            });
            return;
        }
        this.props.login(loginData).then(res => {
            if (res === undefined) {
                console.log("login success");
                return this.context.router.push(`/`);
            } else {
                if (res.error === "user") {
                    let errors = this.state.errors;
                    errors.identifier = "this username or email does not exist";
                    return this.setState({
                        errors: errors
                    });
                } else {
                    let errors = this.state.errors;
                    errors.password = "the password does not match";
                    return this.setState({
                        errors: errors
                    });
                }
            }
        });
    }

    onAutoFill() {
        this.setState({
            identifier: `User_${Math.floor(Math.random() * 10 + 1)}`,
            password: "password"
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>
                            Please Sign Up or <a href="/login">Login</a>
                        </h2>
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.identifier
                            })}
                        >
                            <label className="control-label">
                                Username/Email
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="identifier"
                                placeholder="Your username or email address"
                                value={this.state.identifier}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.identifier && (
                                <span className="help-block">
                                    {this.state.errors.identifier}
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
                        <button
                            className="btn btn-primary"
                            onClick={() => this.submitForm()}
                        >
                            Login
                        </button>
                        {this.state.identifier ? (
                            <button
                                className="btn btn-success pull-right"
                                onClick={() => this.submitForm()}
                            >
                                Go
                            </button>
                        ) : (
                            <button
                                className="btn btn-warning pull-right"
                                onClick={e => this.onAutoFill(e)}
                            >
                                Demo
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Login;
