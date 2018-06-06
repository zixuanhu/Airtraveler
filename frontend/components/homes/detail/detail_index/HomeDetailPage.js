import React from "react";
import Hero from "../detail_asset/Hero";
import IconInfo from "../detail_asset/Iconinfo";
import Trip from "../detail_asset/Trip/TripContainer";
import TitleSection from "../detail_asset/TitleSection";
import Space from "../detail_asset/Space";
import OverviewInfo from "../detail_asset/OverviewInfo";
import GoogleMap from "../detail_asset/GoogleMap";
import isEmpty from "lodash/isEmpty";

class HomeDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            marginLeft: "10%",
            title: "",
            description: "",
            img: [],
            lng: "",
            lat: "",
            user: {},
            price: "",
            target: "",
            room_type: "",
            property_type: "",
            setup_plan: "",
            readyToload: false,
            guest_availability: "",
            room_availability: "",
            beds_availability: "",
            bath_availability: ""
        };

        this.marginChange = this.marginChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.marginChange);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.marginChange);
    }

    marginChange() {
        if (window.innerWidth < 400) {
            this.setState({
                marginLeft: 40
            });
        } else {
            this.setState({
                marginLeft: "10%"
            });
        }
    }

    componentWillMount() {
        const id = this.props.params.home_id;
        this.props.gethome(id).then(() => {
            this.props.findUser(this.props.home.user_id).then(() => {
                const home = this.props.home;

                const user = this.props.user;

                this.setState({
                    address: home.address,
                    user: user,
                    title: home.title,
                    description: home.description,
                    img: home.img,
                    price: home.price,
                    room_type: home.room_type,
                    guest_availability: home.guest_availability,
                    room_availability: home.rooms_availability,
                    beds_availability: home.beds_availability,
                    bath_availability: home.bath_availability,
                    target: home.target,
                    lat: home.lat,
                    lng: home.lng,
                    setup_plan: home.setup_for_guest,
                    property_type: home.property_type
                });
            });
        });
        setTimeout(() => {
            this.setState({
                readyToload: true
            });
        }, 1000);
    }


    render() {
        const marginStyle = {
            marginLeft: this.state.marginLeft,
            marginRight: 50
        };
        const heroPic = {
            img: this.state.img,
            readyToload: this.state.readyToload
        };

        const info = {
            title: this.state.title,
            hostprofile: this.state.hostprofile,
            readyToload: this.state.readyToload
        };

        const homeInfo = {
            beds_availability: this.state.room_availability,
            bath_availability: this.state.bath_availability,
            guest_availability: this.state.guest_availability,
            target: this.state.target,
            room_type: this.state.room_type,
            property_type: this.state.property_type,
            setup_plan: this.state.setup_plan,
            readyToload: this.state.readyToload
        };
        const overviewInfoText = {
            description: this.state.description,
            readyToload: this.state.readyToload,
            host: this.state.user

        }

        return (
            <div
            >
                <Hero
                    heroPic={heroPic}
                    onChange={e => {
                        this.change(e);
                    }}
                />
                <div className='container'>
                    <div className="row">
                        <div className="column home">

                            <div
                                style={marginStyle}
                                className="home-info"
                            >
                                <TitleSection info={info}/>
                                <IconInfo homeinfo={homeInfo}/>
                                <OverviewInfo
                                    overviewInfoText={
                                        overviewInfoText
                                    }

                                />
                                <Space homeInfo={homeInfo}/>
                                {isEmpty(this.state.lat) ? (
                                    "loading..."
                                ) : (
                                    <GoogleMap
                                        lat={this.state.lat}
                                        lng={this.state.lng}
                                        readyToload={this.state.readyToload}
                                    />
                                )}
                            </div>

                        </div>
                        <div className="column sidetrip">
                            <Trip home_id={this.props.params.home_id} readyToload={this.state.readyToload}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomeDetailPage;
