import React from "react";
import classnames from "classnames";
import DateTimeField from "react-datetime";
import OptionFieldGroup from "../../../../common/OptionFieldGroup";
import guestAvailabilityOptions from "./guestavailbiity";
import faker from "faker";
import moment from 'moment';

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
                check_in: moment(new Date()).format("MMM DD YYYY h"),
                reserved_id: faker.random.uuid()
            });
        });
        setTimeout(() => {
            $("#datetime-wraper input").attr("disabled", "disabled");
        }, 1000);
    }

    totalprice() {
        const totalprice = this.state.price * this.state.living_nights;
        return
        (<div>
                <p>${this.state.price} * {this.state.living_nights} nights</p>
                <p> Total ${totalprice}</p>

            </div>
        );
    }

    updateguestnumber(e) {
        e.preventDefault();
        this.setState({
            guest_number: e.target.value
        });

    }

    updatecheckinDate(e) {
        let errors = this.state.errors;
        errors.check_out = "";
        let living_nights = 1
        if (this.state.check_out !== '') {
            living_nights = ~~moment.duration((this.state.check_out).diff(e)).asDays() + 1
        }
        if (e < moment(this.state.check_out) || this.state.check_out === '') {
            this.setState({
                check_in: e,
                living_nights: living_nights,
                errors: errors
            });
        } else {
            errors.check_out = "check out date have to later than check in date";
            this.setState({
                check_in: e,
                living_nights: 1,
                errors: errors
            });
        }

    }

    updatecheckoutDate(e) {
        let error = this.state.errors;
        error.check_out = "";
        if (e > moment(this.state.check_in)) {
            this.setState({
                check_out: e,
                living_nights: ~~moment.duration((e).diff(this.state.check_in)).asDays() + 1,
                errors: error
            });
        } else {
            error.check_out = "check out date have to later than check in date";
            this.setState({
                check_out: e,
                living_nights: 1,
                errors: error
            })
            ;
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

        if (error.check_in || error.check_out || error.guest_number) {
            this.setState({
                errors: error
            })
        } else {
            this.props.newtrip(this.state).then(() => {
                this.context.router.push(
                    `/trips/${this.props.curUser.id}`
                );
            })


        }


    }


    validcheckin(current) {
        return current.isAfter(moment().subtract(1, "day"));
    }


    render() {
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
                        format="MMM DD YYYY h"
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
                        format="MMM DD YYYY h"
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
                        options={guestAvailabilityOptions(this.state.guest_availability)}
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
