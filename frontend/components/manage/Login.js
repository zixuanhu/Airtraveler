import React from "react";
import classnames from "classnames";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: "",
            password: "",
            login: true,
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

    goSignUp(e) {
        e.preventDefault();

        $('.login').fadeOut('slow').css('display', 'none');
        $('.sign-up').fadeIn('slow');
        $('.form-container').animate({left: '10px'}, 'slow');

        setTimeout(() => this.context.router.push(`/signup`), 600)
        this.setState({
            login: false
        })

    }

    goLogIn(e) {
        e.preventDefault();
        $('.sign-up').fadeOut('slow').css('display', 'none');
        $('.login').fadeIn('slow');
        $('.form-container').animate({left: '400px'}, 'slow');


        this.setState({
            login: true
        })

    }

    render() {
        return (<div className="wrapper">
            <div className="background">
                <div className="left ">
                    <h2 className="back-header">Dont have an account yet?</h2>
                    <p className="back-p">Well doggonit you should sign up today!</p>
                    <button className="back-btn signup-but" onClick={e => {
                        this.goSignUp(e)

                    }}>SIGN UP
                    </button>
                </div>
                <div className="right ">
                    <h2 className="back-header">Do you already have an account?</h2>
                    <p className="back-p">Well doggonit let's get you logged in!</p>
                    <button className="back-btn login-but" onClick={e => {

                        this.goLogIn(e)
                    }}>LOGIN
                    </button>
                </div>
            </div>
            <div className="form-container" style={{left: '400px'}}>
                <div className="sign-up" style={!(this.state.signup) ? {display: 'none'} : {display: 'inherit'}}>
                    <h2 className="form-header">SIGN UP</h2>
                    <div
                        className={classnames("form-group", {
                            "has-error": this.state.errors.username
                        })}
                    >

                        <input

                            type="text"
                            name="username"
                            placeholder="Your Username"
                            value={this.state.username}
                            onChange={e => this.updateForm(e)}
                        /><i className="fa fa-user"></i>
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

                        <input

                            type="text"
                            name="email"
                            placeholder="Your Email"
                            value={this.state.email}
                            onChange={e => this.updateForm(e)}
                        /><i className="fa fa-envelope-o"></i>
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
                        <input

                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={e => this.updateForm(e)}
                        /><i className="fa fa-lock"></i>
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

                        <input

                            type="password"
                            name="password_confirm"
                            placeholder="Confirm Password"
                            value={this.state.password_confirm}
                            onChange={e => this.updateForm(e)}
                        /><i className="fa fa-lock"></i>
                        {this.state.errors.password_confirm && (
                            <span className="help-block">
                                                {this.state.errors.password_confirm}
                                            </span>
                        )}

                    </div>

                    <button
                        className="form-btn"
                        onClick={() => this.submitForm()}
                    >
                        SignUp
                    </button>

                    {this.state.username ? (
                        <button
                            className="btn btn-success pull-right"
                            onClick={() => this.submitForm()}
                            style={{marginTop: '30px'}}
                        >
                            Go
                        </button>
                    ) : (
                        <button
                            className="btn btn-warning pull-right"
                            onClick={e => this.onAutoFill(e)}
                            style={{marginTop: '30px'}}
                        >
                            Demo
                        </button>
                    )}

                </div>
                <div className="login" style={!(this.state.login) ? {display: 'none'} : {display: 'inherit'}}>
                    <h2 className="form-header">LOGIN</h2>

                    <div
                        className={classnames("form-group", {
                            "has-error": this.state.errors.identifier
                        })}
                    >

                        <input
                            type="text"
                            name="identifier"
                            placeholder="Your username or email address"
                            value={this.state.identifier}
                            onChange={e => this.updateForm(e)}
                        /><i className="fa fa-envelope-o"></i>
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

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={e => this.updateForm(e)}
                        /><i className="fa fa-lock"></i>
                        {this.state.errors.password && (
                            <span className="help-block">
                                                    {this.state.errors.password}
                                                </span>
                        )}
                    </div>


                    <button
                        className=" form-btn "
                        onClick={() => this.submitForm()}
                    >
                        Login
                    </button>

                    {this.state.identifier ? (
                        <button
                            className="btn btn-success pull-right "
                            style={{marginTop: '30px'}}
                            onClick={() => this.submitForm()}
                        >
                            Go
                        </button>
                    ) : (
                        <button
                            className="btn btn-warning pull-right "
                            style={{marginTop: '30px'}}
                            onClick={e => this.onAutoFill(e)}
                        >
                            Demo
                        </button>
                    )}

                </div>
            </div>
        </div>)

    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Login;
