import React from "react";
import classnames from "classnames";

import OptionFieldGroup from "../../common/OptionFieldGroup";

import propertyTypeOptions from "../asset/propertytype/propertytype";
import roomTypeOptions from "../asset/roomtype/roomtype";
import guestAvailabilityOptions from "../asset/availbility/guest";
import roomsAvailabilityOptions from "../asset/availbility/room";
import bedsAvailabilityOptions from "../asset/availbility/beds";
import bathAvailabilityOptions from "../asset/availbility/bath";

import setupForGuestOptions from "../asset/setup/guestsetup";
import targetOptions from "../asset/target/target";
import isEmpty from "lodash/isEmpty";

class Newhome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user.id,
            title: "",
            description: "",
            img: [],
            property_type: "",
            room_type: "",
            price: "",
            guest_availability: "",
            rooms_availability: "",
            beds_availability: "",
            bath_availability: "",
            setup_for_guest: "",
            target: "",
            errors: {},
            readyToSubmit: false
        };
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit() {
        const title = this.state.title;
        const description = this.state.description;
        const price = this.state.price;
        const property_type = this.state.property_type;
        const room_type = this.state.room_type;
        const guest_availability = this.state.guest_availability;
        const rooms_availability = this.state.rooms_availability;
        const beds_availability = this.state.beds_availability;
        const bath_availability = this.state.bath_availability;
        const setup_for_guest = this.state.setup_for_guest;
        const target = this.state.target;
        let errors = {};
        if (!title) {
            errors.title = "The tile cannot be empty";
        }
        if (!description) {
            errors.description = "The description cannot be empty";
        }
        if (!price) {
            errors.price = "The price cannot be empty";
        }
        if (!property_type) {
            errors.property_type = "Please select the property type";
        }
        if (!room_type) {
            errors.room_type = "Please select the room type";
        }
        if (!guest_availability) {
            errors.guest_availability = "Please select the guest availability";
        }
        if (!rooms_availability) {
            errors.rooms_availability = "Please select the rooms availability";
        }
        if (!beds_availability) {
            errors.beds_availability = "Please select the beds availability";
        }
        if (!bath_availability) {
            errors.bath_availability = "Please select the bath availability";
        }
        if (!setup_for_guest) {
            errors.setup_for_guest = "Please select the guest setup plan";
        }
        if (!target) {
            errors.target = "Please select the your target promotion";
        }
        if (isEmpty(errors)) {
            if (this.state.img.length === 0) {
                this.state.img = ["http://pic.uzzf.com/up/2017-3/14901722897158766.jpg"];
            }
            this.props.createhome(this.state).then(() => {
                console.log("create success");
                this.context.router.push(`/homes`);
            });
        } else {
            this.setState({
                errors: errors
            });
        }
    }

    onAutoFill(e) {
        e.preventDefault();
        this.setState({
            title: "zixuan's home",
            description: "good good",
            img: ["http://pic.uzzf.com/up/2017-3/14901722897158766.jpg"],
            property_type: "Unique Home",
            room_type: "Private Room",
            price: "127.89",
            guest_availability: "3",
            rooms_availability: "1",
            beds_availability: "5",
            bath_availability: "6",
            setup_for_guest: "Pay to clean up",
            target: "Family",
            readyToSubmit: true
        });
    }

    onUploadimg(e) {
        e.preventDefault();
        cloudinary.openUploadWidget(
            {
                cloud_name: "airtraveler",
                upload_preset: "airtraveler",
                theme: "minimal"
            },
            (errors, response) => {
                if (!errors) {
                    console.log("******UPLOAD img SUCCESS!!******");
                    console.log(response[0].url);
                    let imgs = this.state.img;
                    imgs.push(response[0].url);
                    this.setState({
                        img: imgs
                    });
                }
            }
        );
    }

    deletimg(e, key) {
        e.preventDefault();
        let imgs = this.state.img;
        imgs.splice(key, 1);
        this.setState({
            img: imgs
        });
    }

    imgs() {
        let imgs = [];
        for (let i = 0; i < this.state.img.length; i++) {
            imgs.push(
                <div className="col-md-4" key={i}>
                    <span className="delet-icon"
                          onClick={e => this.deletimg(e, i)}>&times;</span>
                    <img
                        src={this.state.img[i]}
                        className="img-rounded imgComponent-imgs"
                    />
                </div>
            );
        }
        if (this.state.img.length < 6) {
            imgs.push(
                <div
                    className="col-md-4"
                    key={this.state.img.length}
                    onClick={e => this.onUploadimg(e)}
                >
                    <div className="imgComponent-imgs-upload">
                        <span className="glyphicon glyphicon-upload"/>
                        Click to upload Image
                    </div>
                </div>
            );
        }
        return imgs;
    }

    imgComponent() {
        if (this.state.img.length !== 0) {
            return (
                <div className="form-group row" id="imgComponent-imgdiv">
                    {this.imgs()}
                </div>
            );
        } else {
            return (
                <div
                    className="imgComponent-upload"
                    onClick={e => this.onUploadimg(e)}
                >
                    <span className="glyphicon glyphicon-upload"/>
                    Click to upload Image
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <br/>
                <h2> Please Create your home </h2>
                <hr/>
                <p>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.onSubmit()}
                    >
                        Submit
                    </button>
                    {this.state.readyToSubmit ? (
                        <button
                            className="btn btn-danger pull-right"
                            onClick={e => this.onSubmit(e)}
                        >
                            Go
                        </button>
                    ) : (
                        <button
                            className="btn btn-warning pull-right"
                            onClick={e => this.onAutoFill(e)}
                        >
                            Demo
                        </button>
                    )}
                </p>
                <div className="jumbotron">
                    <h3>#1 Basic Information</h3>
                    <hr/>
                    <div
                        className={classnames("form-group", {
                            "has-error": this.state.errors.title
                        })}
                    >
                        <label className="control-label">Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            placeholder="Please enter the title"
                            value={this.state.title}
                            onChange={e => this.updateForm(e)}
                        />
                        {this.state.errors.title && (
                            <span className="help-block">
                                {this.state.errors.title}
                            </span>
                        )}
                    </div>
                    <div
                        className={classnames("form-group", {
                            "has-error": this.state.errors.description
                        })}
                    >
                        <label className="control-label">Description</label>
                        <textarea
                            rows="5"
                            cols="20"
                            className="form-control"
                            type="text"
                            name="description"
                            placeholder="Please enter the description"
                            value={this.state.description}
                            onChange={e => this.updateForm(e)}
                        />
                        {this.state.errors.description && (
                            <span className="help-block">
                                {this.state.errors.description}
                            </span>
                        )}
                    </div>
                    <div
                        className={classnames("form-group", {
                            "has-error": this.state.errors.price
                        })}
                    >
                        <label className="control-label">
                            Pirce (dollar/day)
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="price"
                            placeholder="Please enter the price"
                            value={this.state.price}
                            onChange={e => this.updateForm(e)}
                        />
                        {this.state.errors.title && (
                            <span className="help-block">
                                {this.state.errors.title}
                            </span>
                        )}
                    </div>
                </div>

                <div className="jumbotron">
                    <h3>#2 Discover your place</h3>
                    <hr/>
                    <OptionFieldGroup
                        label="Property Type"
                        name="property_type"
                        value={this.state.property_type}
                        onChange={e => this.updateForm(e)}
                        error={this.state.errors.property_type}
                        options={propertyTypeOptions}
                    />
                    <OptionFieldGroup
                        label="Room Type"
                        name="room_type"
                        value={this.state.room_type}
                        onChange={e => this.updateForm(e)}
                        error={this.state.errors.room_type}
                        options={roomTypeOptions}
                    />
                </div>

                <div className="jumbotron">
                    <h3>#3 Space Capacity</h3>
                    <hr/>
                    <OptionFieldGroup
                        label="Guest Availability"
                        name="guest_availability"
                        value={this.state.guest_availability}
                        onChange={e => this.updateForm(e)}
                        error={this.state.errors.guest_availability}
                        options={guestAvailabilityOptions}
                    />
                    <OptionFieldGroup
                        label="Room Availability"
                        name="rooms_availability"
                        value={this.state.rooms_availability}
                        onChange={e => this.updateForm(e)}
                        error={this.state.errors.rooms_availability}
                        options={guestAvailabilityOptions}
                    />
                    <OptionFieldGroup
                        label="Beds Availability"
                        name="beds_availability"
                        value={this.state.beds_availability}
                        onChange={e => this.updateForm(e)}
                        error={this.state.errors.beds_availability}
                        options={guestAvailabilityOptions}
                    />
                    <OptionFieldGroup
                        label="Baths Availability"
                        name="bath_availability"
                        value={this.state.bath_availability}
                        onChange={e => this.updateForm(e)}
                        error={this.state.errors.bath_availability}
                        options={guestAvailabilityOptions}
                    />
                </div>
                <div className="jumbotron">
                    <h3>#4 Customization</h3>
                    <hr/>
                    <OptionFieldGroup
                        label="Setup Plan"
                        name="setup_for_guest"
                        value={this.state.setup_for_guest}
                        onChange={e => this.updateForm(e)}
                        error={this.state.errors.setup_for_guest}
                        options={setupForGuestOptions}
                    />
                    <OptionFieldGroup
                        label="Target Guests"
                        name="target"
                        value={this.state.target}
                        onChange={e => this.updateForm(e)}
                        error={this.state.errors.target}
                        options={targetOptions}
                    />
                </div>

                <div className="jumbotron">
                    <h3>#5 Images</h3>
                    <hr/>
                    <div>
                        <label className="control-label">Images</label>
                        {this.imgComponent()}
                    </div>
                </div>

                <p>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.onSubmit()}
                    >
                        Submit
                    </button>
                    {this.state.readyToSubmit ? (
                        <button
                            className="btn btn-danger pull-right"
                            onClick={e => this.onSubmit(e)}
                        >
                            Go
                        </button>
                    ) : (
                        <button
                            className="btn btn-warning pull-right"
                            onClick={e => this.onAutoFill(e)}
                        >
                            Demo
                        </button>
                    )}
                </p>
            </div>
        );
    }
}

Newhome.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Newhome;
