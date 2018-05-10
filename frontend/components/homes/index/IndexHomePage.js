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
                    className="col-sm-6 col-md-4 "
                    onClick={() =>
                        this.context.router.push(`/homedetail/${home.id}`)
                    }
                >
                    <div className="caption gallery-card ">
                        <img className="homeimg " src={home.img} />

                        <br />
                        <p className="hometitle">ID: {home.id} </p>
                        <p className="hometitle">{home.title} </p>
                        <p className="homeprice">$100 per night</p>
                        <hr />
                    </div>
                </div>
            );
        }
        return homeCards;
    }
    render() {
        return <div className="container cards">{this.homeCards()}</div>;
    }
}

indexhomePage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default indexhomePage;
