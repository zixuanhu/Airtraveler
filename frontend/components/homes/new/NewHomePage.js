import React from "react";
import classnames from "classnames";

class newhome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            confirmed: true,
            errors: {}
        };
    }
    updateForm(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitForm() {
        // console.log(this.state);
        this.setState({
            errors: {}
        });

        this.setState({
            confirmed: false
        });
    }
    confirmForm() {
        let obj = {};
        obj.title = this.state.title;
        obj.description = this.state.description;

        this.props.createhome(obj).then(() => {
            console.log("create success");
            this.context.router.push(`/`);
        });
    }

    onAutoFill(e) {
        this.setState({
            title: "zixuan's home",
            description: "good good"
        });
    }

    confirmpage() {
        //debugger;
        return (
            <div>
                <div className="container-fluid well span6">
                    <div className="row-fluid">
                        <div className="span8">
                            <h3>{this.state.title}</h3>
                            <h6>{this.state.description}</h6>
                        </div>
                    </div>
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => this.confirmForm()}
                >
                    comfirm
                </button>
            </div>
        );
    }
    Createpage() {
        return (
            <div className="container">
                <h2>Please Create your home</h2>
                <br />
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
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

                        <button
                            className="btn btn-primary"
                            onClick={() => this.submitForm()}
                        >
                            Submit
                        </button>
                        <button
                            className="btn btn-warning pull-right"
                            onClick={e => this.onAutoFill(e)}
                        >
                            Demo
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        if (this.state.confirmed) {
            return this.Createpage();
        } else {
            return this.confirmpage();
        }
    }
}
newhome.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default newhome;
