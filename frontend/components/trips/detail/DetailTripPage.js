import React from "react";
import Tripindex from "../index/IndexTripPage";
import isEmpty from "lodash/isEmpty";
import GoogleMap from "./GoogleMap";

class Tripdetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trip_id: this.props.params.trip_id,
            trip: {},
            home: {}
        };
    }

    componentWillMount() {
        this.props.getTrip(this.state.trip_id).then(() => {
            this.setState({
                trip: this.props.trip,
                home: this.props.trip.home
            });
        });
    }

    delete() {
        this.props.deletetrip(this.state.trip_id).then(() => {
            this.context.router.push(`/trips/${this.props.user.id}`);
        });
    }

    render() {
        const trip = this.state.trip;
        const home = this.state.home;
        // console.log(this.state);
        // if (!isEmpty(home)) {
        //     debugger;
        // }
        return (
            <div>
                reserved_id:{trip.reserved_id}
                <br />
                check_in:{moment(trip.check_in).format("MMMM Do YYYY, h")}
                <br />
                check_out:{moment(trip.check_out).format("MMMM Do YYYY, h")}
                <br />
                title:{home.title}
                <br />
                room_type:{home.room_type}
                <button
                    onClick={() => {
                        this.delete();
                    }}
                >
                    delete
                </button>
                {isEmpty(home) ? (
                    "loading..."
                ) : (
                    <GoogleMap lat={home.lat} lng={home.lng} />
                )}
            </div>
        );
    }
}

Tripdetail.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Tripdetail;
