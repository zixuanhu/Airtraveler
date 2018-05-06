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
        this.props.login(loginData).then(() => {
            if (this.props.error === "") {
                console.log("login success");
                this.context.router.push(
                    `/authoried/login/${this.state.identifier}`
                );
            } else {
                if (this.props.error === "user") {
                    let errors = this.state.errors;
                    errors.identifier = "this username or email does not exist";
                    // debugger;
                    this.setState({
                        errors: errors
                    });
                } else {
                    // debugger;
                    let errors = this.state.errors;
                    errors.password = "the password does not match";
                    this.setState({
                        errors: errors
                    });
                }
            }
        });
    }

    onAutoFill() {
        this.setState({
            identifier: "zixuan",
            password: "password"
        });
    }
    render() {
        return (
            <div className="container">
                <div className="omb_login">
                    <h3 className="omb_authTitle">
                        Login or <a href="/signup"> Sign up </a>
                    </h3>
                    <div className="row omb_row-sm-offset-3">
                        <div className="col-xs-12 col-sm-6">
                            <div
                                className={classnames("form-group", {
                                    "has-error": this.state.errors.identifier
                                })}
                            >
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-user" />
                                    </span>
                                    <input
                                        className="form-control"
                                        placeholder="username or email address"
                                        name="identifier"
                                        onChange={e => this.updateForm(e)}
                                        value={this.state.identifier}
                                    />
                                </div>
                                {this.state.errors.identifier && (
                                    <span className="help-block">
                                        {this.state.errors.identifier}
                                    </span>
                                )}
                            </div>
                            <br />
                            <div
                                className={classnames("form-group", {
                                    "has-error": this.state.errors.password
                                })}
                            >
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-lock" />
                                    </span>
                                    <input
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        type="password"
                                        onChange={e => this.updateForm(e)}
                                        value={this.state.password}
                                    />
                                </div>
                                {this.state.errors.password && (
                                    <span className="help-block">
                                        {this.state.errors.password}
                                    </span>
                                )}
                            </div>
                            <br />
                            <button
                                className="btn btn-primary"
                                onClick={() => this.submitForm()}
                            >
                                Login
                            </button>
                            <button
                                className="btn btn-warning pull-right"
                                onClick={() => this.onAutoFill()}
                            >
                                Demo
                            </button>
                        </div>
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
