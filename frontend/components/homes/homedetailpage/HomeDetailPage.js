import React from "react";
import classnames from "classnames";

class HomeDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home_id: this.props.params.home_id,
            home_title: "",
            home_description: ""
        };
    }
    componentWillMount() {
        this.props.gethome(this.state.home_id).then(() =>
            this.setState({
                home_title: this.props.home.title,
                home_description: this.props.home.description
            })
        );
    }
    render() {
        return (
            <div>
                <div className="container-fluid well span6">
                    <div className="row-fluid">
                        <div className="span8">
                            <h3>{this.state.home_id}</h3>
                            <h4>{this.state.home_title}</h4>
                            <h5>{this.state.home_description}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomeDetailPage;
