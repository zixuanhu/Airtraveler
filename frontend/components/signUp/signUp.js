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
            img:
                "https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=58b9eb1c972397ddd62c900269b29e8f/562c11dfa9ec8a135ea6851bf103918fa1ecc089.jpg",
            errors: {}
        };
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onAutoFill(e) {
        this.setState({
            username: "zixuan",
            email: "zixuan@mit.edu",
            password: "password",
            password_confirm: "password"
        });
    }

    submitForm() {
        // console.log(this.state);
        this.setState({
            errors: {}
        });

        if (this.state.username === "") {
            let errors = {};
            errors.username = "the username cannot be empty";
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
                    this.state.username.includes(
                        "@" ||
                            "#" ||
                            " " ||
                            "$" ||
                            "%" ||
                            "^" ||
                            "+" ||
                            "-" ||
                            "="
                    )
                ) {
                    let errors = this.state.errors;
                    errors.username =
                        "please DO NOT includes special symbols like (@ # $ ^ * ) or space in username";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }
                if (respond.data.usernameexist) {
                    let errors = this.state.errors;
                    errors.username =
                        "this username is existed, please choose another one";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }
                if (respond.data.emailexist) {
                    let errors = this.state.errors;
                    errors.email =
                        "this email is existed, please choose another one";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }
                if (this.state.password.length < 5) {
                    let errors = this.state.errors;
                    errors.password = "Password too short";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }
                if (this.state.password !== this.state.password_confirm) {
                    let errors = this.state.errors;
                    errors.password_confirm = "Password does not match";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }
                if (!this.state.email.includes("@")) {
                    let errors = this.state.errors;
                    errors.email = "the email is invalid";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }

                if (readyToSubmit) {
                    let obj = {};
                    obj.username = this.state.username;
                    obj.email = this.state.email;
                    obj.password = this.state.password;
                    obj.img = this.state.img;

                    this.props.signup(obj).then(() => {
                        console.log("create success");
                        this.context.router.push(
                            `/authoried/signup/${this.state.username}`
                        );
                    });
                    const loginData = {
                        identifier: this.state.username,
                        password: this.state.password
                    };
                    this.props.login(loginData);
                }
            });
    }

    signUppage() {
        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2> Please Sign Up </h2>{" "}
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.username
                            })}
                        >
                            <label className="control-label"> Username </label>{" "}
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                placeholder="Your Username"
                                value={this.state.username}
                                onChange={e => this.updateForm(e)}
                            />{" "}
                            {this.state.errors.username && (
                                <span className="help-block">
                                    {" "}
                                    {this.state.errors.username}{" "}
                                </span>
                            )}{" "}
                        </div>
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.email
                            })}
                        >
                            <label className="control-label"> Email </label>{" "}
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                value={this.state.email}
                                onChange={e => this.updateForm(e)}
                            />{" "}
                            {this.state.errors.email && (
                                <span className="help-block">
                                    {" "}
                                    {this.state.errors.email}{" "}
                                </span>
                            )}{" "}
                        </div>
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.password
                            })}
                        >
                            <label className="control-label"> Password </label>{" "}
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={e => this.updateForm(e)}
                            />{" "}
                            {this.state.errors.password && (
                                <span className="help-block">
                                    {" "}
                                    {this.state.errors.password}{" "}
                                </span>
                            )}{" "}
                        </div>
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.password_confirm
                            })}
                        >
                            <label className="control-label">
                                Confirm Password{" "}
                            </label>{" "}
                            <input
                                className="form-control"
                                type="password"
                                name="password_confirm"
                                placeholder="Confirm Password"
                                value={this.state.password_confirm}
                                onChange={e => this.updateForm(e)}
                            />{" "}
                            {this.state.errors.password_confirm && (
                                <span className="help-block">
                                    {" "}
                                    {this.state.errors.password_confirm}{" "}
                                </span>
                            )}{" "}
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={() => this.submitForm()}
                        >
                            Submit{" "}
                        </button>{" "}
                        {this.state.username ? (
                            <button
                                className="btn btn-success pull-right"
                                onClick={() => this.submitForm()}
                            >
                                Go{" "}
                            </button>
                        ) : (
                            <button
                                className="btn btn-warning pull-right"
                                onClick={e => this.onAutoFill(e)}
                            >
                                Demo{" "}
                            </button>
                        )}{" "}
                    </div>{" "}
                </div>{" "}
            </div>
        );
    }

    render() {
        return this.signUppage();
    }
}

SignUp.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default SignUp;
