import React from "react";
import Linkify from 'react-linkify';
import isEmpty from "lodash/isEmpty";
import GoogleMap from "./GoogleMap";

class Tripdetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trip_id: this.props.params.trip_id,
            trip: {},
            home: {},
            host: {},
            curIndex: 0
        };
    }

    componentWillMount() {
        this.props.getTrip(this.state.trip_id).then(() => {
            this.setState({
                trip: this.props.trip,
                home: this.props.trip.home
            })
            this.props.getUser(this.props.trip.home.user_id).then(() => {
                this.setState({
                    host: this.props.host
                })
            })
        });
    }

    delete() {
        this.props.deletetrip(this.state.trip_id).then(() => {
            this.context.router.push(`/trips/${this.props.user.id}`);
        });
    }

    priviousImg(e, length) {
        e.preventDefault();
        if (this.state.curIndex > 0) {
            const newIndex = this.state.curIndex - 1;
            this.setState({
                curIndex: newIndex
            })
        } else {
            this.setState({
                curIndex: length - 1
            })
        }
    }

    nextImg(e, length) {

        e.preventDefault();
        if (this.state.curIndex < length - 1) {
            const newIndex = this.state.curIndex + 1;
            this.setState({
                curIndex: newIndex
            })
        } else {
            this.setState({
                curIndex: 0
            })
        }
    }

    home_img() {
        const imgs = this.state.home.img
        if (!imgs) {
            return <div></div>
        }
        const length = imgs.length

        const divStyle = {
            position: "relative",
            backgroundImage: "url(" + imgs[this.state.curIndex] + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 300,

        };

        return (
            <div style={divStyle} className="detail-imgs">
                <svg className="arrow" id="left-control" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 65.8"
                     enableBackground="new 0 0 50 65.8" onClick={e => this.priviousImg(e, length)}>
                    <g>
                        <path d="M42.7,5.5L12,36.2c-0.7,0.7-1.9,0.7-2.6,0l-2-2c-0.7-0.7-0.7-1.9,0-2.6L38,0.8c0.7-0.7,1.9-0.7,2.6,0l2,2
         C43.4,3.6,43.4,4.8,42.7,5.5z"/>
                        <path d="M42.7,60.3L12,29.6c-0.7-0.7-1.9-0.7-2.6,0l-2,2c-0.7,0.7-0.7,1.9,0,2.6L38,65c0.7,0.7,1.9,0.7,2.6,0l2-2
         C43.4,62.2,43.4,61,42.7,60.3z"/>
                    </g>
                </svg>


                <svg className="arrow" id="right-control" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 65.8"
                     enableBackground="new 0 0 50 65.8" onClick={e => this.nextImg(e, length)}>
                    <g>
                        <path d="M7.3,5.5L38,36.2c0.7,0.7,1.9,0.7,2.6,0l2-2c0.7-0.7,0.7-1.9,0-2.6L12,0.8c-0.7-0.7-1.9-0.7-2.6,0l-2,2
               C6.6,3.6,6.6,4.8,7.3,5.5z"/>
                        <path d="M7.3,60.3L38,29.6c0.7-0.7,1.9-0.7,2.6,0l2,2c0.7,0.7,0.7,1.9,0,2.6L12,65c-0.7,0.7-1.9,0.7-2.6,0l-2-2
               C6.6,62.2,6.6,61,7.3,60.3z"/>
                    </g>
                </svg>
            </div>
        );

    }

    render() {
        const trip = this.state.trip;
        const home = this.state.home;
        const host = this.state.host;

        return (
            <div className="container">
                <div>Reservation code: {trip.reserved_id}</div>
                <hr/>
                <div className="row">
                    <div className="column middle" style={{border: '3px solid #cccccc'}}>
                        <div className='row'>
                            <br/>
                            <div className='col-sm-6'>
                                <h4>Check In</h4>
                                <h5>{moment(trip.check_in).format("MMMM Do YYYY, h")}</h5>
                                <br/>
                            </div>


                            <div className='col-sm-6'>
                                <h4>Check Out</h4>
                                <h5>{moment(trip.check_out).format("MMMM Do YYYY, h")}</h5>
                                <br/>
                            </div>

                        </div>
                        <hr/>
                        <div>
                            <br/>
                            <h4>Address</h4>
                            <p>{home.address}</p>
                            <a>get Direction</a>
                            {isEmpty(home.lat) ? (
                                "loading..."
                            ) : (
                                <GoogleMap lat={home.lat} lng={home.lng}/>
                            )}

                        </div>
                        <br/>
                        <hr/>
                        <br/>
                        <div>
                            <h4> Billing</h4>
                            <p>1 night totle</p>
                            <p>${home.price}</p>
                        </div>
                        <br/>
                        <hr/>
                        <div>
                            <a>Cancle the trip</a>
                        </div>

                    </div>
                    <div className="column side">
                        <div style={{border: '3px solid #cccccc'}}>
                            <br/>
                            <div>
                                <img style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 50,
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }} src={host.img}/>
                            </div>
                            <br/>
                            <div style={{textAlign: "center"}}>
                                <h5>Your host, {host.firstname} {host.lastname}</h5>
                                <p>Have a question about your reservation? The best way to get information is to ask
                                    your
                                    host directly.</p>
                            </div>
                            <div className="well">
                                <li>
                                    email: <Linkify>{host.email}</Linkify>
                                </li>
                                <li>
                                    phone: {host.phonenumber}
                                </li>
                            </div>
                            <br/>
                        </div>
                        <br/>
                        <br/>
                        <div>
                            {this.home_img()}
                        </div>

                    </div>
                </div>

            </div>

        )

        //
        // return (
        //

        // reserved_id:{trip.reserved_id}
        // <br/>
        // check_in:{moment(trip.check_in).format("MMMM Do YYYY, h")}
        // <br/>
        // check_out:{moment(trip.check_out).format("MMMM Do YYYY, h")}
        // <br/>
        // title:{home.title}
        // <br/>
        // room_type:{home.room_type}
        // <button
        //             onClick={() => {
        //                 this.delete();
        //             }}
        //         >
        //             delete
        //         </button>
        //         {isEmpty(home) ? (
        //             "loading..."
        //         ) : (
        //             <GoogleMap lat={home.lat} lng={home.lng}/>
        //         )}
        //     </div>
        // );
    }
}

Tripdetail.contextTypes = {
    router: React.PropTypes.object.isRequired
};
export default Tripdetail;
