import React from "react";
import classnames from "classnames";

class edithome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: {},
            title: "",
            description: "",
            img: [],
            home_id: this.props.params.home_id,
            errors: {}
        };
    }
    componentWillMount() {
        this.props.gethome(this.state.home_id).then(() => {
            const home = this.props.home;
            this.setState({
                title: home.title,
                description: home.description,
                img: home.img,
                home: home
            });
        });
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
        obj.home_id = this.state.home_id;

        this.props.edithome(obj).then(() => {
            console.log("edit success");

            this.context.router.push(`/manage/${this.props.home.user_id}`);
        });
    }
    deletimg(e, key) {
        e.preventDefault();
        let imgs = this.state.img;
        imgs.splice(key, 1);
        this.setState({
            img: imgs
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
    imgs() {
        let imgs = [];
        for (let i = 0; i < this.state.img.length; i++) {
            imgs.push(
                <img
                    src={this.state.img[i]}
                    className="img-rounded"
                    key={i}
                    style={{
                        width: "100%",
                        maxHeight: "200px",
                        padding: 3
                    }}
                    onClick={e => this.deletimg(e, i)}
                />
            );
        }
        if (this.state.img.length <= 3) {
            imgs.push(
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
        const imgComponent =
            this.state.img.length !== 0 ? (
                <div
                    style={{
                        padding: "5px",
                        cursor: "pointer",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        maxWidth: "360px"
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
                        <h2>Please Create your home</h2>
                        <hr />
                        <div
                            className={classnames("form-group", {
                                "has-error": this.state.errors.title
                            })}
                        >
                            <label className="control-label">title</label>
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

                        {imgComponent}
                        <br />

                        <button
                            className="btn btn-success pull-right"
                            onClick={e => this.onSubmit(e)}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
edithome.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default edithome;
