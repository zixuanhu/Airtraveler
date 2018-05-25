import React from "react";
import classnames from "classnames";
import DateTimeField from "react-datetime";
import OptionFieldGroup from "../../../../common/OptionFieldGroup";
import guestAvailabilityOptions from "../../../asset/availbility/guest";
import faker from "faker";

class Trip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            home_id: this.props.home_id,
            guest_id: this.props.curUser.id,
            price: 0,
            check_in: "",
            check_out: "",
            guest_availability: 0,
            guest_number: 0,
            living_nights: 1,
            reserved_id: '',
            errors: {}
        };
    }

    componentWillMount() {
        const id = this.props.home_id;
        this.props.gethome(id).then(() => {
            this.setState({
                guest_availability: this.props.home.guest_availability,
                price: this.props.home.price,
                check_in: moment(new Date()).format("MMM DD YYYY h:mm A"),
                reserved_id: faker.random.uuid()
            });
        });
        setTimeout(() => {
            $("#datetime-wraper input").attr("disabled", "disabled");
        }, 1000);
    }

    totalprice() {
        const totalprice = this.state.price * this.state.living_nights;
        return (
            <div>
                <p>
                    ${this.state.price} * {this.state.living_nights} nights
                </p>
                <p>Total ${totalprice}</p>
            </div>
        );
    }

    updateguestnumber(e) {
        e.preventDefault();
        let errors = this.state.errors
        if (e.target.value > this.state.guest_availability) {
            errors.guest_number = "the guest number is higher then guest availability"
            this.setState({
                errors: errors
            })
        } else {
            errors.guest_number = ""
            this.setState({
                guest_number: e.target.value,
                errors: errors
            });
        }
    }

    updatecheckinDate(e) {
        const check_in_time = moment(e).format("MMM DD YYYY h:mm A");
        let error = this.state.errors;
        if (check_in_time != "Invalid date") {
            this.setState({
                check_in: e,
                errors: error
            });
        } else {
            error.check_in = "this is an invalid time";
            this.setState({
                errors: error
            });
        }
    }

    newTrip(e) {
        e.preventDefault();
        let error = {};

        if (this.state.check_in === '') {
            error.check_in = "please choose your check in date"
        }
        if (this.state.check_in > this.state.check_out) {
            error.check_out = "check out date have to later than check in date"
        }
        if (this.state.check_out === '') {
            error.check_out = "please choose your check out date"
        }
        if (this.state.guest_number === 0) {
            error.guest_number = "please choose your guest number"
        }
        if (this.state.guest_number > this.state.guest_availability) {
            error.guest_number = "the guest number is higher then guest availability"
        }
        if (error.check_in || error.check_out || error.guest_number) {
            this.setState({
                errors: error
            })
        } else {
            this.props.newtrip(this.state)
        }


    }

    updatecheckoutDate(e) {

        let error = this.state.errors;
        error.check_out = "";
        if (e > this.state.check_in) {
            this.setState({
                check_out: e,
                errors: error
            });
        } else {
            error.check_out = "check out date have to later than check in date";
            this.setState({
                errors: error
            });
        }
    }

    validcheckin(current) {
        return current.isAfter(moment().subtract(1, "day"));
    }


    render() {
        console.log(this.state);
        return (
            <div className="trip-card ">
                <h4>${this.state.price}/per night</h4>
                <hr/>
                <p>Check In</p>
                <div
                    style={{position: "relative"}}
                    className={classnames("form-group", {
                        "has-error": this.state.errors.check_in
                    })}
                    id="datetime-wraper"
                >
                    <DateTimeField
                        name={"check_in"}
                        dateTime={this.state.check_in}
                        format="MMM DD YYYY h:mm A"
                        size="md"
                        isValidDate={this.validcheckin}
                        onChange={e => this.updatecheckinDate(e)}
                    />
                    {this.state.errors.check_in && (
                        <span className="help-block">
                            {this.state.errors.check_in}
                        </span>
                    )}
                </div>

                <p>Check Out</p>
                <div
                    style={{position: "relative"}}
                    className={classnames("form-group", {
                        "has-error": this.state.errors.check_out
                    })}
                    id="datetime-wraper"
                >
                    <DateTimeField
                        name={"check_out"}
                        dateTime={this.state.check_out}
                        format="MMM DD YYYY h:mm A"
                        size="md"
                        isValidDate={this.validcheckout}
                        onChange={e => this.updatecheckoutDate(e)}
                    />
                    {this.state.errors.check_out && (
                        <span className="help-block">
                            {this.state.errors.check_out}
                        </span>
                    )}
                </div>
                <br/>
                <div
                    style={{position: "relative"}}
                    className={classnames("form-group", {
                        "has-error": this.state.errors.guest_number
                    })}
                    id="datetime-wraper"
                >
                    <OptionFieldGroup
                        label="Number of Guest"
                        name="guest_number"
                        value={this.state.guest_number}
                        options={guestAvailabilityOptions}
                        onChange={e => this.updateguestnumber(e)}
                    />
                    {this.state.errors.guest_number && (
                        <span className="help-block">
                            {this.state.errors.guest_number}
                        </span>
                    )}
                </div>
                <hr/>

                {this.totalprice()}
                <div>
                    <button
                        className="btn btn-primary btn-lg btn-block"
                        onClick={e => this.newTrip(e)}>
                        Start the trip
                    </button>
                </div>
            </div>
        );
    }
}

Trip.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Trip;
