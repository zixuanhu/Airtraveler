import React from "react";
import classnames from "classnames";

class indexhomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
    }
    componentWillMount() {
        this.props.homeList();
    }

    homeCards() {
        let homeCards = [];
        for (let i = 0; i < this.props.homes.length; i++) {
            const home = this.props.homes[i];

            homeCards.push(
                <div
                    key={i}
                    className="col-sm-6 col-md-4 gallery-card gallery-card-vimeo"
                    onClick={() =>
                        this.context.router.push(`/homedetail/${home.id}`)
                    }
                >
                    <div className="caption">
                        <img
                            style={{ width: "100%", height: "150px" }}
                            src="https://res.cloudinary.com/airtraveler/image/upload/v1525745617/iyz58cvqqpmtkvynynyb.jpg"
                        />
                        <div>ID: {home.id}</div>
                        <div>title: {home.title} </div>
                        <div>description:{home.description}</div>
                        <br />
                        <hr />
                    </div>
                </div>
            );
        }
        return homeCards;
    }
    render() {
        return <div>{this.homeCards()}</div>;
    }
}

indexhomePage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default indexhomePage;
