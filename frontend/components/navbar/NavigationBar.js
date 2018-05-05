import React from "react";
import { debug } from "util";
class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default ">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false"
                            >
                                <span className="sr-only">
                                    Toggle navigation
                                </span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a
                                className="navbar-brand"
                                onClick={() => this.context.router.push("/")}
                            >
                                AirTaveler
                            </a>
                        </div>

                        <div
                            className="collapse navbar-collapse"
                            id="bs-example-navbar-collapse-1"
                        >
                            <div className="nav navbar-nav navbar-right">
                                <li>
                                    <a
                                        onClick={() =>
                                            this.context.router.push(
                                                `/userprofile/${
                                                    this.props.logInusername
                                                }`
                                            )
                                        }
                                    >
                                        {this.props.logInusername}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() =>
                                            this.context.router.push("/login")
                                        }
                                    >
                                        Log in
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() =>
                                            this.context.router.push("/signup")
                                        }
                                    >
                                        Sign up
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

NavigationBar.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default NavigationBar;
