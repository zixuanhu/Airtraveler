import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#F2F4F5"
            }}>
                <footer
                    className="row"
                    style={{
                        backgroundColor: "#F2F4F5",
                        width: "100%"
                    }}
                >
                    <div className="column copyright"
                         style={{
                             fontSize: "15px",
                             color: "#66afe9",

                         }}>
                        <br/>
                        <div style={{marginLeft: '10px'}}>
                            <p> © 2018 Copyright by Zixuan Hu. Individual Project.</p>
                            <p> BS Student from Lewis and Clark College, Software Engineer, Web developer</p>
                        </div>
                    </div>
                    <div
                        className="column social"
                        style={{
                            padding: "15px"
                        }}
                    >
                        <ul>
                            <li
                                style={{
                                    listStyle: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "15px",
                                    color: "#66afe9"
                                }}>
                                Social Link
                            </li>
                            <li
                                style={{
                                    listStyle: "none",
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <i
                                    className="fa fa-github-square"
                                    style={{
                                        margin: "0 10px 0 0",
                                        fontSize: "22px",
                                        color: "#66afe9"
                                    }}
                                />
                                <a>GitHub</a>
                            </li>
                            <li
                                style={{
                                    listStyle: "none"
                                }}
                            >
                                <i
                                    className="fa fa-linkedin-square"
                                    style={{
                                        margin: "0 10px 0 0",
                                        fontSize: "22px",
                                        color: "#66afe9"
                                    }}
                                />

                                <a>LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="column contact"
                        style={{
                            padding: "15px"
                        }}
                    >
                        <ul>
                            <li
                                style={{
                                    listStyle: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    fontSize: "15px",
                                    color: "#66afe9"
                                }}>
                                Contact Author
                            </li>
                            <li
                                style={{
                                    listStyle: "none",
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <i
                                    className="glyphicon glyphicon-user"
                                    style={{
                                        margin: "0 10px 0 0",
                                        fontSize: "22px",
                                        color: "#66afe9"
                                    }}
                                />
                                <a>Zixuan Merlin Hu</a>
                            </li>
                            <li
                                style={{
                                    listStyle: "none"
                                }}
                            >
                                <i
                                    className="glyphicon glyphicon-envelope"
                                    style={{
                                        margin: "0 10px 0 0",
                                        fontSize: "22px",
                                        color: "#66afe9"
                                    }}
                                />

                                <a>zixuan@lclark.edu</a>
                            </li>
                            <li
                                style={{
                                    listStyle: "none"
                                }}
                            >
                                <i
                                    className="glyphicon glyphicon-earphone"
                                    style={{
                                        margin: "0 10px 0 0",
                                        fontSize: "22px",
                                        color: "#66afe9"
                                    }}
                                />

                                <a>5037248577</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        );

    }
}

export default Footer;
