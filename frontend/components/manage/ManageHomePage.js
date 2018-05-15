import React from "react";
import classnames from "classnames";
import {debug} from "util";

class ManageHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
    }

    componentWillMount() {
        this.props.homeList(this.props.params.user_id);
    }

    homeCards() {
        if (this.props.homes === undefined) return <div/>;
        let homeCards = [];
        for (let i = 0; i < this.props.homes.length; i++) {
            const home = this.props.homes[i];

            homeCards.push(
                <div
                    key={i}
                    className="col-sm-6 col-md-4 "
                    onClick={() =>
                        this.context.router.push(`/homes/${home.id}/edit`)
                    }
                >
                    <div className="caption gallery-card ">
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
                        <p className="homeprice">$100 per night</p>
                        <hr/>
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
