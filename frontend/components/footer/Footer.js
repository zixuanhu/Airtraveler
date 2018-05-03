import React from "react";
class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer
                    style={{
                        position: "fixed",
                        bottom: 0,
                        backgroundColor: "#F2F4F5",
                        width: "100%"
                    }}
                >
                    <div className="container">
                        <ul className="bs-docs-footer-links">
                            <li>
                                <a>GitHub</a>
                            </li>
                            <li>
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
