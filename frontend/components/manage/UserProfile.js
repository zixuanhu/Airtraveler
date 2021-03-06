import React from "react";
import classnames from "classnames";
import {format} from "react-phone-input-auto-format";
import isEmpty from "lodash/isEmpty";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            firstname: "",
            lastname: "",
            username: "",
            gender: false,
            description: "",
            phonenumber: "",
            email: "",
            img: "",
            errors: {}
        };
    }

    componentWillMount() {
        this.props.findUser(this.props.routeParams.identifer).then(() => {
            this.setState({
                user: this.props.user,
                email: this.props.user.email,
                username: this.props.user.username,
                img: this.props.user.img,
                description: this.props.user.description,
                firstname: this.props.user.firstname,
                lastname: this.props.user.lastname,
                gender: this.props.user.gender
            });
            if (this.props.user.phonenumber !== null) {
                this.setState({
                    phonenumber: this.props.user.phonenumber
                });
            }
        });
    }

    onUploadImage(e) {
        e.preventDefault();
        cloudinary.openUploadWidget(
            {
                cloud_name: "airtraveler",
                upload_preset: "airtraveler",
                theme: "minimal"
            },
            (errors, response) => {
                if (!errors) {
                    console.log("******UPLOAD IMAGE SUCCESS!!******");
                    console.log(response[0].url);
                    this.setState({
                        img: response[0].url
                    });
                }
            }
        );
    }

    submitForm() {
        let errors = {};
        if (this.state.username === "") {
            errors.username = "the username cannot be empty";
        }
        if (
            this.state.username.includes(
                "@" || "#" || " " || "$" || "%" || "^" || "+" || "-" || "="
            )
        ) {
            errors.username =
                "please DO NOT includes special symbols like (@ # $ ^ * ) or space in username";
        }
        if (!this.state.email.includes("@")) {
            errors.email = "the email is invalid";
        }
        if (this.state.phonenumber.length != 14) {
            errors.phonenumber = "the phonenumber is invalid";
        }
        if (!this.state.firstname) {
            errors.firstname = "the first name cannot be empty";
        }
        if (!this.state.lastname) {
            errors.lastname = "the last name cannot be empty";
        }

        if (!isEmpty(errors)) {
            this.setState({
                errors: errors
            });
            return;
        }

        let readyToSubmit = true;
        this.props
            .checkExist(this.state.username, this.state.email)
            .then(respond => {
                //debugger;
                if (
                    respond.data.usernameexist &&
                    this.state.user.username !== this.state.username
                ) {
                    errors.username =
                        "this username is existed, please choose another one";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }
                if (
                    respond.data.emailexist &&
                    this.state.email !== this.state.user.email
                ) {
                    let errors = this.state.errors;
                    errors.email =
                        "this email is existed, please choose another one";
                    this.setState({
                        errors: errors
                    });
                    readyToSubmit = false;
                }

                if (readyToSubmit) {
                    let obj = {};
                    obj.id = this.state.user.id;
                    obj.username = this.state.username;
                    obj.email = this.state.email;
                    obj.img = this.state.img;
                    obj.gender = this.state.gender;
                    obj.firstname = this.state.firstname;
                    obj.lastname = this.state.lastname;
                    obj.description = this.state.description;
                    obj.phonenumber = this.state.phonenumber;
                    this.props.editProfile(obj).then(() => {
                        this.context.router.push(`/`);
                    });
                }
            });
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onAutoFill(e) {
        e.preventDefault();
        this.setState({
            gender: true,
            firstname: "zixuan",
            lastname: "hu",
            phonenumber: format("5037248577")
        });
    }

    image() {
        if (this.state.img) {
            return (
                <div
                    style={{
                        cursor: "pointer"
                    }}
                    onClick={e => this.onUploadImage(e)}
                >
                    <img
                        src={this.state.img}
                        className="img-rounded"
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50
                        }}
                    />
                </div>
            );
        } else
            return (
                <div
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50
                    }}
                    onClick={e => this.onUploadImage(e)}
                />
            );
    }

    setPhoneNumber(e) {
        e.preventDefault();

        if (e.target.value.length < 15) {
            this.setState({
                [e.target.name]: format(e.target.value)
            });
        }
    }

    editProfile() {
        console.log(this.state.phonenumber);

        return (
            <div className="container">
                <br/>

                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Profile</h2>
                        <div>
                            <label className="control-label">
                                Profile picture
                            </label>
                            {this.image()}
                        </div>
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.username
                            })}
                        >
                            <label className="control-label">Username</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.username && (
                                <span className="help-block">
                                    {this.state.errors.username}
                                </span>
                            )}
                        </div>

                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.email
                            })}
                        >
                            <label className="control-label">Email</label>
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.email && (
                                <span className="help-block">
                                    {this.state.errors.email}
                                </span>
                            )}
                        </div>
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.firstname
                            })}
                        >
                            <label className="control-label">First Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="firstname"
                                placeholder="firstname"
                                value={this.state.firstname}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.firstname && (
                                <span className="help-block">
                                    {this.state.errors.firstname}
                                </span>
                            )}
                        </div>
                        <br/>
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.lastname
                            })}
                        >
                            <label className="control-label">Last Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="lastname"
                                placeholder="lastname"
                                value={this.state.lastname}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.lastname && (
                                <span className="help-block">
                                    {this.state.errors.lastname}
                                </span>
                            )}
                        </div>
                        <br/>
                        <div>
                            <label className="control-label">Gender</label>
                            <label className="checkbox-inline">
                                <input
                                    type="radio"
                                    id="male"
                                    value="male"
                                    checked={this.state.gender === true}
                                    name="optionsRadiosinline"
                                    onChange={() =>
                                        this.setState({
                                            gender: true
                                        })
                                    }
                                />
                                &nbsp;male
                            </label>
                            <label className="checkbox-inline">
                                <input
                                    type="radio"
                                    id="female"
                                    value="female"
                                    checked={this.state.gender === false}
                                    name="optionsRadiosinline"
                                    onChange={() =>
                                        this.setState({
                                            gender: false
                                        })
                                    }
                                />

                                &nbsp;female
                            </label>
                        </div>
                        <br/>
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.username
                            })}
                        >
                            <label className="control-label">
                                Phone number
                            </label>

                            <input
                                className="form-control"
                                type="text"
                                name="phonenumber"
                                placeholder="phonenumber"
                                value={this.state.phonenumber}
                                onChange={e => {
                                    this.setPhoneNumber(e);
                                }}
                            />

                            {this.state.errors.phonenumber && (
                                <span className="help-block">
                                    {this.state.errors.phonenumber}
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="control-label">
                                Self Instruction
                            </label>
                            <textarea
                                rows="5"
                                cols="20"
                                className="form-control"
                                type="text"
                                name="description"
                                placeholder="description"
                                value={this.state.description}
                                onChange={e => this.updateForm(e)}
                            />
                        </div>
                        <br/>

                        <button
                            className="btn btn-primary"
                            onClick={() => this.submitForm()}
                        >
                            Submit
                        </button>
                        {this.state.username &&
                        this.state.firstname &&
                        this.state.lastname &&
                        this.state.gender &&
                        this.state.phonenumber ? (
                            <button
                                className="btn btn-success pull-right"
                                onClick={() => this.submitForm()}
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
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return <div>{this.editProfile()}</div>;
    }
}

UserProfile.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default UserProfile;
