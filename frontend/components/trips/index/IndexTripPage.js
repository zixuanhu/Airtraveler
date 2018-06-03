import React from "react";


class Tripindex extends React.Component {
    constructor(props) {

        super(props)

        this.state = {
            trips: {},
            user_id: this.props.params.user_id
        }

    }

    componentWillMount() {

        if (~~this.state.user_id === ~~this.props.user.id) {
            this.props.getTrips(this.state.user_id).then(() => {
                    this.setState({
                        trips: this.props.trips
                    })
                }
            )
        }

    }

    buildTripCard(trip, key) {
        const img = trip.home.img[0];
        const check_in = moment(trip.check_in).format('MMMM Do YYYY, h');
        const check_out = moment(trip.check_out).format('MMMM Do YYYY, h');
        const address = trip.home.address;
        return (
            <div className="container" key={key}>
                <div className="row">

                    <div>

                        <div className="card-wrap horizontal codepen"
                             onClick={() => {
                                 this.context.router.push(
                                     `/trip/${trip.id}`
                                 )
                             }}>

                            <div className="card-img-container">

                                <figure>
                                    <img src={img}/>
                                </figure>

                            </div>

                            <div className="card-info">

                                <div className="card-address">
                                    <a>
                                        <p className="card-title">{trip.home.title}</p>
                                        <p>{address}
                                        </p>
                                    </a>
                                </div>

                                <div className="card-phone">
                                    <p><span> Check in</span>{check_in}</p>
                                    <p><span>Check out</span>{check_out}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }

    TripCards() {
        const trips = this.state.trips;
        let tripCards = [];
        for (let i = 0; i < trips.length; i++) {
            tripCards.push(this.buildTripCard(trips[i], i))
        }
        return tripCards;
    }

    render() {

        return (
            <div>
                {this.TripCards()}
            </div>
        );
    }


}

Tripindex.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Tripindex;