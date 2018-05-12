import React from "react";
import { debug } from "util";
class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userLink = (
            <div className="nav navbar-nav navbar-right">
                <li>
                    <a onClick={() => this.context.router.push(`/homes`)}>
                        Homes
                    </a>
                </li>
                <li>
                    <a onClick={() => this.context.router.push(`/newhome`)}>
                        Host a new place
                    </a>
                </li>

                <li className="dropdown">
                    <a
                        className="dropdown-toggle"
                        id="dropdown-img"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img
                            style={{
                                width: 35,
                                height: 35,
                                borderRadius: 50
                            }}
                            src={this.props.user.img}
                            alt="profilpic"
                        />
                        <span className="caret" />
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <a
                                onClick={() =>
                                    this.context.router.push(
                                        `/manage/${this.props.user.id}`
                                    )
                                }
                            >
                                Manage host
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() =>
                                    this.context.router.push(
                                        `/userprofile/${this.props.user.id}`
                                    )
                                }
                            >
                                Edit Profile
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li>
                            <a
                                onClick={() =>
                                    this.props.logout().then(() => {
                                        this.context.router.push("/");
                                    })
                                }
                            >
                                Log Out
                            </a>
                        </li>
                    </ul>
                </li>
            </div>
        );

        const guestLink = (
            <div className="nav navbar-nav navbar-right">
                <li>
                    <a onClick={() => this.context.router.push("/login")}>
                        Log in
                    </a>
                </li>
                <li>
                    <a onClick={() => this.context.router.push("/signup")}>
                        Sign up
                    </a>
                </li>
            </div>
        );

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
                            {this.props.isAuthenticated ? userLink : guestLink}
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
