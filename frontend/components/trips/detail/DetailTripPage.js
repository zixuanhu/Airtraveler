import React from "react";


class Tripdetail extends React.Component {
    constructor(props) {

        super(props)

        this.state = {
            trip_id: this.props.params.trip_id,
            trip: {}
        }

    }

    componentWillMount() {
        this.props.getTrip(this.state.trip_id).then(() => {
            this.setState({
                trip: this.props.trip
            })
        })
    }


    render() {
        console.log(this.state)
        return (
            <div>

            </div>
        );
    }


}

export default Tripdetail;