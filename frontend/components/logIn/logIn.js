import React from "react";

class logIn extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="omb_login">
                    <h3 className="omb_authTitle">
                        Login or <a href="#">Sign up</a>
                    </h3>

                    <div className="row omb_row-sm-offset-3">
                        <div className="col-xs-12 col-sm-6">
                            <form
                                className="omb_loginForm"
                                action=""
                                autocomplete="off"
                                method="POST"
                            >
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-user" />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder="email address"
                                    />
                                </div>
                                <span className="help-block" />

                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-lock" />
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <br />
                                <button
                                    className="btn btn-lg btn-primary btn-block"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row omb_row-sm-offset-3">
                        <div className="col-xs-12 col-sm-3">
                            <label className="checkbox">
                                <input type="checkbox" value="remember-me" />Remember
                                Me
                            </label>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <p className="omb_forgotPwd">
                                <a href="#">Forgot password?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default logIn;
