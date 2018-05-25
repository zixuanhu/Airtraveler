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
        this.props.getTrips(this.state.user_id).then(() => {
                this.setState({
                    trips: this.props.trips
                })
            }
        )
    }

    buildTripCard(trip, key) {
        //debugger
        // return (
        //     <div key={key}>
        //         reserved_id:{trip.reserved_id}
        //         check_in:{trip.check_in}
        //         check_out:{trip.check_out}
        //         guest_number:{trip.guest_number}
        //         home_id:{trip.home_id}
        //         trip_id;{trip.id}
        //     </div>);
        console.log(trip)
        const img = trip.home.img[0];


        return (
            <div className="container">
                <div className="row">

                    <div className="col-sm-6">

                        <div className="card-wrap horizontal codepen">

                            <div className="card-img-container">
                                <a href="#">
                                    <figure>
                                        <img src={this.img}/>
                                    </figure>
                                </a>
                            </div>

                            <div className="card-info">

                                <div className="card-address">
                                    <a href="#">
                                        <p className="card-title">Long Beach, Ca</p>
                                        <p>111 W. Ocean Boulevard, <br/>
                                            Fourth Floor,<br/>

                                        </p>
                                    </a>
                                </div>

                                <div className="card-phone">
                                    <a><span>Phone</span>(562) 216-8270</a>
                                    <a><span>Fax</span>(916) 924-1829</a>
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
        debugger
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

export default Tripindex;