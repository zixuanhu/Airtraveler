import React from "react";
import classnames from "classnames";
class userProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            firstname: "",
            lastname: "",
            username: "",
            gender: "",
            description: "",
            email: "",
            img: "",
            errors: {}
        };
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
        if (this.state.username === "") {
            let errors = {};
            errors.username = "the username cannot be empty";
            this.setState({
                errors: errors
            });
        }
        if (
            this.state.username.includes(
                "@" || "#" || " " || "$" || "%" || "^" || "+" || "-" || "="
            )
        ) {
            let errors = this.state.errors;
            errors.username =
                "please DO NOT includes special symbols like (@ # $ ^ * ) or space in username";
            this.setState({
                errors: errors
            });
            return;
        }
        if (!this.state.email.includes("@")) {
            let errors = this.state.errors;
            errors.email = "the email is invalid";
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
                    let errors = this.state.errors;
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
                    this.props.editProfile(obj).then(() => {
                        this.context.router.push(`/`);
                    });
                }
            });
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
        });
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    editProfile() {
        const imageComponent = this.state.img ? (
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
        ) : (
            <div
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50
                }}
                onClick={e => this.onUploadImage(e)}
            />
        );
        return (
            <div className="container">
                <br />

                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Please Edit</h2>
                        <div>
                            <label className="control-label">
                                Profile picture
                            </label>
                            {imageComponent}
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
                        <div>
                            <label className="control-label">First Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="firstname"
                                placeholder="firstname"
                                value={this.state.firstname}
                                onChange={e => this.updateForm(e)}
                            />
                        </div>
                        <br />
                        <div>
                            <label className="control-label">Last Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="lastname"
                                placeholder="lastname"
                                value={this.state.lastname}
                                onChange={e => this.updateForm(e)}
                            />
                        </div>
                        <br />
                        <div>
                            <label className="control-label">Gender</label>
                            <label className="checkbox-inline">
                                <input
                                    type="radio"
                                    id="male"
                                    value="male"
                                    checked={this.state.gender}
                                    name="optionsRadiosinline"
                                    onChange={() =>
                                        this.setState({
                                            gender: true
                                        })
                                    }
                                />
                                male
                            </label>
                            <label className="checkbox-inline">
                                <input
                                    type="radio"
                                    id="female"
                                    value="female"
                                    name="optionsRadiosinline"
                                    checked={this.state.gender === false}
                                    onChange={() =>
                                        this.setState({
                                            gender: false
                                        })
                                    }
                                />
                                female
                            </label>
                        </div>
                        <br />
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
                        <br />
                        <button
                            className="btn btn-primary"
                            onClick={() => this.submitForm()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return <div>{this.editProfile()}</div>;
    }
}

userProfile.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default userProfile;
