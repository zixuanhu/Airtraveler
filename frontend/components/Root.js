import React from "react";
import NavigationBarContainer from "./navbar/NavigationBarContainer";
import Footer from "./footer/FooterContainer";
class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <NavigationBarContainer />
                <div className="children-components">{this.props.children}</div>
                <Footer />
            </div>
        );
    }
}

export default Root;
