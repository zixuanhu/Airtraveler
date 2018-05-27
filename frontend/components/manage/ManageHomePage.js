import React from "react";

import {debug} from "util";

class ManageHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homes: [],
            errors: {}
        };
    }

    componentWillMount() {
        this.props.homeList(this.props.params.user_id).then(() =>
            this.setState({
                homes: this.props.homes
            }));
    }

    homeCards() {

        let homeCards = [];
        for (let i = 0; i < this.state.homes.length; i++) {
            const home = this.state.homes[i];
            homeCards.push(
                <div
                    key={i}
                    className="col-sm-6 col-md-4 "
                    onClick={() =>
                        this.context.router.push(`/homes/${home.id}`)
                    }
                >
                    <div className="card">
                        <img
                            className="homeimg"
                            src={
                                home.img[0] ||
                                "http://pic.uzzf.com/up/2017-3/14901722897158766.jpg"
                            }
                        />

                        <br/>
                        <p className="hometitle">ID: {home.id} </p>
                        <p className="hometitle">{home.title} </p>
                        <p className="homeprice">${home.price}</p>

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

ManageHomePage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ManageHomePage;
