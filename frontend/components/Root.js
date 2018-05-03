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
                <NavigationBarContainer />

                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Root;
