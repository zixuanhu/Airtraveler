import React from "react";
class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer
                    style={{
                        backgroundColor: "#F2F4F5",
                        width: "100%"
                    }}
                >
                    <div
                        style={{
                            padding: "15px"
                        }}
                    >
                        <ul>
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
                </footer>
            </div>
        );
    }
}

export default Footer;
