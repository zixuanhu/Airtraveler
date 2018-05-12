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
        let obj = {};
        obj.title = this.state.title;
        obj.description = this.state.description;
        obj.img = this.state.img;
        obj.user_id = this.state.user_id;

        this.props.createhome(obj).then(() => {
            console.log("create success");
            this.context.router.push(`/homes`);
        });
    }

    onAutoFill(e) {
        let img = [];
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
                        className="img-rounded"
                        style={{
                            width: "100%",
                            maxHeight: "200px",
                            padding: 3
                        }}
                        onClick={e => this.deletimg(e, i)}
                    />
                </div>
            );
        }
        if (this.state.img.length < 6) {
            imgs.push(
                <div
                    className="col-md-4"
                    style={{
                        fontSize: "10px",
                        color: "#ccc",
                        border: "2px dashed",
                        borderColor: "#ccc",
                        lineHeight: "95px",
                        textAlign: "center",
                        cursor: "pointer",
                        backgroundColor: "#fff",
                        width: "151px"
                    }}
                    key={this.state.img.length}
                    onClick={e => this.onUploadimg(e)}
                >
                    <span className="glyphicon glyphicon-upload" />
                    Click to upload Image
                </div>
            );
        }

        return imgs;
    }

    render() {
        const readyToSubmit = Boolean(
            this.state.title && this.state.description
        );
        const imgComponent =
            this.state.img.length !== 0 ? (
                <div
                    className="form-group row"
                    style={{
                        padding: "5px",
                        border: "1px solid #ccc",
                        width: "100%",
                        margin: "0"
                    }}
                >
                    {this.imgs()}
                </div>
            ) : (
                <div
                    style={{
                        color: "#ccc",
                        border: "2px dashed",
                        borderColor: "#ccc",
                        lineHeight: "150px",
                        textAlign: "center",
                        cursor: "pointer",
                        backgroundColor: "#fff"
                    }}
                    onClick={e => this.onUploadimg(e)}
                >
                    <span className="glyphicon glyphicon-upload" />
                    Click to upload Image
                </div>
            );
        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2> Please Create your home </h2> <hr />
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
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.description
                            })}
                        >
                            <label className="control-label">description</label>
                            <input
                                className="form-control"
                                type="text"
                                name="description"
                                placeholder="Your description"
                                value={this.state.description}
                                onChange={e => this.updateForm(e)}
                            />
                            {this.state.errors.description && (
                                <span className="help-block">
                                    {this.state.errors.description}
                                </span>
                            )}
                        </div>
                        {imgComponent} <br />
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
newhome.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default newhome;
