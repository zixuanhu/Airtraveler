import React from "react";
import Linkify from "react-linkify";
import isEmpty from "lodash/isEmpty";
import GoogleMap from "./GoogleMap";
import moment from "moment/moment";

class DetailTripPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trip_id: this.props.params.trip_id,
            trip: {},
            home: {},
            host: {},
            readyToload: false,
            curIndex: 0
        };
    }

    componentWillMount() {
        this.props.getTrip(this.state.trip_id).then(() => {
            this.setState({
                trip: this.props.trip,
                home: this.props.trip.home
            });
            this.props.getUser(this.props.trip.home.user_id).then(() => {
                this.setState({
                    host: this.props.host
                });
            });
        });
        setTimeout(() => {
            this.setState({
                readyToload: true
            });
        }, 1000);
    }

    cancelTrip(e) {
        e.preventDefault();
        const r = confirm("Are you sure you wants to cancle the trip?");
        if (r == true) {
            this.props.deletetrip(this.state.trip_id).then(() => {
                this.context.router.push(`/trips/${this.props.user.id}`);
            });
            alert("Your trip has been cancled!");
        }
    }

    priviousImg(e, length) {
        e.preventDefault();
        if (this.state.curIndex > 0) {
            const newIndex = this.state.curIndex - 1;
            this.setState({
                curIndex: newIndex
            });
        } else {
            this.setState({
                curIndex: length - 1
            });
        }
    }

    nextImg(e, length) {
        e.preventDefault();
        if (this.state.curIndex < length - 1) {
            const newIndex = this.state.curIndex + 1;
            this.setState({
                curIndex: newIndex
            });
        } else {
            this.setState({
                curIndex: 0
            });
        }
    }

    home_img() {
        const imgs = this.state.home.img;
        if (!imgs) {
            return <div />;
        }
        const length = imgs.length;

        const divStyle = {
            position: "relative",
            backgroundImage: "url(" + imgs[this.state.curIndex] + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 300
        };

        return (
            <div
                className={this.state.readyToload ? "" : "animated-background"}
            >
                <div
                    style={
                        this.state.readyToload
                            ? { opacity: "1" }
                            : { opacity: "0", marginTop: "5px" }
                    }
                >
                    <div style={divStyle} className="detail-imgs">
                        <svg
                            className="arrow"
                            id="left-control"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 65.8"
                            enableBackground="new 0 0 50 65.8"
                            onClick={e => this.priviousImg(e, length)}
                        >
                            <g>
                                <path
                                    d="M42.7,5.5L12,36.2c-0.7,0.7-1.9,0.7-2.6,0l-2-2c-0.7-0.7-0.7-1.9,0-2.6L38,0.8c0.7-0.7,1.9-0.7,2.6,0l2,2
         C43.4,3.6,43.4,4.8,42.7,5.5z"
                                />
                                <path
                                    d="M42.7,60.3L12,29.6c-0.7-0.7-1.9-0.7-2.6,0l-2,2c-0.7,0.7-0.7,1.9,0,2.6L38,65c0.7,0.7,1.9,0.7,2.6,0l2-2
         C43.4,62.2,43.4,61,42.7,60.3z"
                                />
                            </g>
                        </svg>

                        <svg
                            className="arrow"
                            id="right-control"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 65.8"
                            enableBackground="new 0 0 50 65.8"
                            onClick={e => this.nextImg(e, length)}
                        >
                            <g>
                                <path
                                    d="M7.3,5.5L38,36.2c0.7,0.7,1.9,0.7,2.6,0l2-2c0.7-0.7,0.7-1.9,0-2.6L12,0.8c-0.7-0.7-1.9-0.7-2.6,0l-2,2
               C6.6,3.6,6.6,4.8,7.3,5.5z"
                                />
                                <path
                                    d="M7.3,60.3L38,29.6c0.7-0.7,1.9-0.7,2.6,0l2,2c0.7,0.7,0.7,1.9,0,2.6L12,65c-0.7,0.7-1.9,0.7-2.6,0l-2-2
               C6.6,62.2,6.6,61,7.3,60.3z"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const trip = this.state.trip;
        const home = this.state.home;
        const host = this.state.host;
        const livingNights =
            ~~moment
                .duration(moment(trip.check_out).diff(moment(trip.check_in)))
                .asDays() + 1;

        return (
            <div className="container">
                <div>
                    Reservation code:{" "}
                    <span
                        className={
                            this.state.readyToload ? "" : "animated-background"
                        }
                    >
                        <span
                            style={
                                this.state.readyToload
                                    ? { opacity: "1" }
                                    : {
                                          opacity: "0",
                                          marginTop: "5px"
                                      }
                            }
                        >
                            {" "}
                            {trip.reserved_id}
                        </span>
                    </span>
                </div>
                <hr />
                <div className="row">
                    <div
                        className="column middle"
                        style={{ border: "3px solid #cccccc" }}
                    >
                        <div className="row">
                            <br />
                            <div className="col-sm-6">
                                <h4>Check In</h4>
                                <div
                                    className={
                                        this.state.readyToload
                                            ? ""
                                            : "animated-background"
                                    }
                                >
                                    <div
                                        style={
                                            this.state.readyToload
                                                ? { opacity: "1" }
                                                : {
                                                      opacity: "0",
                                                      marginTop: "5px"
                                                  }
                                        }
                                    >
                                        <h5>
                                            {moment(trip.check_in).format(
                                                "MMMM Do YYYY, h:mm"
                                            )}
                                        </h5>
                                    </div>
                                </div>
                                <br />
                            </div>

                            <div className="col-sm-6">
                                <h4>Check Out</h4>
                                <div
                                    className={
                                        this.state.readyToload
                                            ? ""
                                            : "animated-background"
                                    }
                                >
                                    <div
                                        style={
                                            this.state.readyToload
                                                ? { opacity: "1" }
                                                : {
                                                      opacity: "0",
                                                      marginTop: "5px"
                                                  }
                                        }
                                    >
                                        <h5>
                                            {moment(trip.check_out).format(
                                                "MMMM Do YYYY, h:mm"
                                            )}
                                        </h5>
                                    </div>
                                </div>
                                <br />
                            </div>
                        </div>
                        <hr />
                        <div>
                            <br />
                            <h4>Address</h4>
                            <div
                                className={
                                    this.state.readyToload
                                        ? ""
                                        : "animated-background"
                                }
                            >
                                <div
                                    style={
                                        this.state.readyToload
                                            ? { opacity: "1" }
                                            : { opacity: "0", marginTop: "5px" }
                                    }
                                >
                                    <p>{home.address}</p>
                                </div>
                            </div>
                            <a
                                href={`https://maps.google.com/maps?q=${
                                    this.state.home.lat
                                },${this.state.home.lng}&z=17&hl=en`}
                                target="_blank"
                            >
                                get Direction{" "}
                            </a>|
                            <a
                                onClick={() => {
                                    this.context.router.push(
                                        `/homes/${home.id}`
                                    );
                                }}
                            >
                                {" "}
                                Visiting list
                            </a>
                            {isEmpty(home.lat) ? (
                                "loading..."
                            ) : (
                                <GoogleMap
                                    lat={home.lat}
                                    lng={home.lng}
                                    readyToload={this.state.readyToload}
                                />
                            )}
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div>
                            <h4> Billing</h4>
                            <div
                                className={
                                    this.state.readyToload
                                        ? ""
                                        : "animated-background"
                                }
                            >
                                <div
                                    style={
                                        this.state.readyToload
                                            ? { opacity: "1" }
                                            : { opacity: "0", marginTop: "5px" }
                                    }
                                >
                                    <p>{livingNights} night totle</p>
                                    <p>${livingNights * home.price}</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <hr />
                        <div>
                            <a
                                onClick={e => {
                                    this.cancelTrip(e);
                                }}
                            >
                                Cancle the trip
                            </a>
                        </div>
                    </div>
                    <div className="column side">
                        <div style={{ border: "3px solid #cccccc" }}>
                            <br />
                            <div
                                className={
                                    this.state.readyToload
                                        ? ""
                                        : "animated-background"
                                }
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 50,
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                }}
                            >
                                <div
                                    style={
                                        this.state.readyToload
                                            ? { opacity: "1" }
                                            : { opacity: "0", marginTop: "5px" }
                                    }
                                >
                                    <img
                                        style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 50,
                                            display: "block",
                                            marginLeft: "auto",
                                            marginRight: "auto"
                                        }}
                                        src={host.img}
                                    />
                                </div>
                            </div>
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <h5>
                                    <span
                                        className={
                                            this.state.readyToload
                                                ? ""
                                                : "animated-background"
                                        }
                                    >
                                        <span
                                            style={
                                                this.state.readyToload
                                                    ? { opacity: "1" }
                                                    : {
                                                          opacity: "0",
                                                          marginTop: "5px"
                                                      }
                                            }
                                        >
                                            Your host, {host.firstname}{" "}
                                            {host.lastname}
                                        </span>
                                    </span>
                                </h5>

                                <p>
                                    <span
                                        className={
                                            this.state.readyToload
                                                ? ""
                                                : "animated-background"
                                        }
                                    >
                                        <span
                                            style={
                                                this.state.readyToload
                                                    ? { opacity: "1" }
                                                    : {
                                                          opacity: "0",
                                                          marginTop: "5px"
                                                      }
                                            }
                                        >
                                            Have a question about your
                                            reservation? The best way to get
                                            information is to ask your host
                                            directly.
                                        </span>
                                    </span>
                                </p>
                                <div className="well">
                                    <div>
                                        <i
                                            className="glyphicon glyphicon-envelope"
                                            style={{
                                                margin: "0 10px 0 0",
                                                fontSize: "22px",
                                                color: "#66afe9"
                                            }}
                                        />
                                        <span
                                            className={
                                                this.state.readyToload
                                                    ? ""
                                                    : "animated-background"
                                            }
                                        >
                                            <span
                                                style={
                                                    this.state.readyToload
                                                        ? { opacity: "1" }
                                                        : {
                                                              opacity: "0",
                                                              marginTop: "5px"
                                                          }
                                                }
                                            >
                                                <Linkify>{host.email}</Linkify>
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <i
                                            className="glyphicon glyphicon-earphone"
                                            style={{
                                                margin: "0 10px 0 0",
                                                fontSize: "22px",
                                                color: "#66afe9"
                                            }}
                                        />
                                        <span
                                            className={
                                                this.state.readyToload
                                                    ? ""
                                                    : "animated-background"
                                            }
                                        >
                                            <span
                                                style={
                                                    this.state.readyToload
                                                        ? { opacity: "1" }
                                                        : {
                                                              opacity: "0",
                                                              marginTop: "5px"
                                                          }
                                                }
                                            >
                                                {host.phonenumber}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <br />
                        </div>
                        <br />
                        <br />
                        <div>{this.home_img()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

DetailTripPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default DetailTripPage;
