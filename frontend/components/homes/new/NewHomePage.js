import React from "react";
import classnames from "classnames";

class newhome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            img: [],
            user_id: this.props.user.id,
            price: "",
            EntirePlace: true,
            guest_availability: 0,
            room_availability: 0,
            bed_availability: 0,
            bedrooms: 0,
            bathrooms: 0,
            errors: {}
        };
    }

    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit() {
        this.setState({
            errors: {}
        });

        if (this.state.title === "") {
            let errors = {};
            errors.title = "the tile cannot be empty";
            this.setState({
                errors: errors
            });
            return;
        }
        if (isNaN(this.state.price)) {
            let errors = {};
            errors.description = "the price is inValid";
            this.setState({
                errors: errors
            });
            return;
        }
        if (this.state.description === "") {
            let errors = {};
            errors.price = "the description cannot be empty";
            this.setState({
                errors: errors
            });
            return;
        }
        debugger
        let img;
        if (this.state.img.length === 0) {
            img = ["http://pic.uzzf.com/up/2017-3/14901722897158766.jpg"]
        } else {
            img = this.state.img
        }


        let obj = {};
        obj.title = this.state.title;
        obj.description = this.state.description;
        obj.img = img;
        obj.user_id = this.state.user_id;

        this.props.createhome(obj).then(() => {
            console.log("create success");
            this.context.router.push(`/homes`);
        });
    }

    onAutoFill(e) {
        e.preventDefault();
        this.setState({
            title: "zixuan's home",
            description: "good good",
            img: ["http://pic.uzzf.com/up/2017-3/14901722897158766.jpg"]
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
                    <img
                        src={this.state.img[i]}
                        className="img-rounded imgComponent-imgs"

                        onClick={e => this.deletimg(e, i)}
                    />
                </div>
            );
        }
        if (this.state.img.length < 6) {
            imgs.push(
                <div
                    className="col-md-4 imgComponent-imgs-upload"
                    key={this.state.img.length}
                    onClick={e => this.onUploadimg(e)}
                >
                    <span className="glyphicon glyphicon-upload"/>
                    Click to upload Image
                </div>
            );
        }

        return imgs;
    }

    imgComponent() {
        if (this.state.img.length !== 0) {
            return (
                <div
                    className="form-group row"
                    id="imgComponent-imgdiv"
                >
                    {this.imgs()}
                </div>
            )
        }
        else {
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
        const readyToSubmit = Boolean(
            this.state.title && this.state.description
        );
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2> Please Create your home </h2>
                        <hr/>
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.title
                            })}
                        >
                            <label className="control-label"> title </label>
                            <input
                                className="form-control"
                                type="text"
                                name="title"
                                placeholder="Your title"
                                value={this.state.title}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.title && (
                                <span className="help-block">
                                    {this.state.errors.title}
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="control-label">Type of space</label>
                            <label className="checkbox-inline">
                                <input
                                    type="radio"
                                    id="male"
                                    value="male"
                                    checked={this.state.EntirePlace === true}
                                    name="optionsRadiosinline"
                                    onChange={() =>
                                        this.setState({
                                            EntirePlace: true
                                        })
                                    }
                                />
                                Entire Place
                            </label>
                            <label className="checkbox-inline">
                                <input
                                    type="radio"
                                    id="female"
                                    value="female"
                                    checked={this.state.EntirePlace === false}
                                    name="optionsRadiosinline"
                                    onChange={() =>
                                        this.setState({
                                            EntirePlace: false
                                        })
                                    }
                                />
                                Private Room
                            </label>
                        </div>
                        <div>
                            <label className="control-label"> Guest Availability </label>
                            <select className="form-control selectWidth">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <div>
                            <label className="control-label"> Rooms Availability </label>
                            <select className="form-control selectWidth">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>

                        <div>
                            <label className="control-label"> bedrooms </label>
                            <select className="form-control selectWidth">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <div>
                            <label className="control-label"> bathrooms </label>
                            <select className="form-control selectWidth">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <div>
                            <label className="control-label"> beds Availability </label>
                            <select className="form-control selectWidth">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <div

                            className={classnames("form-group", {
                                "has-error": this.state.errors.price
                            })}
                        >
                            <label className="control-label"> Pirce (dollar/day) </label>
                            <input
                                className="form-control"
                                type="text"
                                name="price"
                                placeholder="Your price"
                                value={this.state.price}
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
                            <label className="control-label">description</label>
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
                            {this.state.errors.description && (
                                <span className="help-block">
                                    {this.state.errors.description}
                                </span>
                            )}
                        </div>

                        <div>
                            {this.imgComponent()}
                        </div>
                        <br/>
                        <button
                            className="btn btn-primary"
                            onClick={() => this.onSubmit()}
                        >
                            Submit
                        </button>
                        {readyToSubmit ? (
                            <button
                                className="btn btn-success pull-right"
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
                    </div>
                </div>
            </div>
        );
    }
}

newhome
    .contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default newhome;
