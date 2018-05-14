import React from "react";
import Hero from "../detail_asset/Hero";
import IconInfo from "../detail_asset/Iconinfo"


const accessibility = "Elevator";
const availability = "5 nights minimum stay";
const accomodatesD = 3;
const bath_availabilityD = 2;
const bedroomsD = 1;

const checkInD = "3PM - 10PM";
const checkOutD = "12PM (noon)";
const propertyTypeD = "Apartment";
const roomTypeD = "Entire home/apt";
const amenities = [
    "Elevator",
    "Pets allowed",
    "Internet",
    "Indoor fireplace",
    "Breakfast",
    "Buzzer/wireless intercom",
    "Heating",
    "Gym",
    "Wheelchair accessible",
    "Family/kid friendly",
    "Doorman",
    "Wireless Internet",
    "Kitchen",
    "Free parking on premises",
    "Hot tub",
    "Cable TV",
    "Suitable for events",
    "Iron",
    "Smoking allowed",
    "Hair dryer",
    "Dryer",
    "Washer",
    "Shampoo",
    "Laptop friendly workspace",
    "Pool",
    "TV",
    "Air conditioning",
    "Hangers",
    "Essentials",
    "Private entrance",
    "Free parking on street",
    "Paid parking off premises"
];
const amenitiesIncluded = [
    1,
    0,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0
];

const airbnbLocation = "Puerto Vallarta, Jalisco, Mexico";
const reviews = 46;


const Section = props => {
    const divStyle = {
        borderTop: "0.1px solid rgba(72, 72, 72, .3)",
        color: "#484848",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 200,
        fontSize: 16
    };

    const titleStyle = {
        fontWeight: 500
    };

    return (
        <div style={divStyle}>
            <p style={titleStyle}>{props.title}</p>
            {props.children}
        </div>
    );
};

const Link = props => {
    const linkStyle = {
        display: "inline-block",
        textDecoration: "none",
        margin: "0 0 10px 0",
        color: "#008489",
        fontWeight: 400,
        cursor: "pointer"
    };
    return (
        <a
            href={props.linkUrl}
            onClick={props.onClick}
            style={linkStyle}
            className="link"
            target={props.target}
        >
            {props.children}
        </a>
    );
};

const Dot = () => {
    const dotStyle = {
        verticalAlign: "middle",
        color: "#484848"
    };

    return <span style={dotStyle}> &middot; </span>;
};

class PageNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: "overview",
            navBar: "dynamic"
        };
        this.pageNavClick = this.pageNavClick.bind(this);
        this.navBarUpdate = this.navBarUpdate.bind(this);
    }

    componentDidMount() {
        document.addEventListener("scroll", this.navBarUpdate);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.navBarUpdate);
    }

    pageNavClick(id) {
        this.setState({
            currentSection: id
        });
    }

    navBarUpdate() {
        if (window.scrollY > 319) {
            if (this.state.navBar !== "static") {
                this.setState({
                    navBar: "static"
                });
            }
        } else {
            if (this.state.navBar !== "dynamic") {
                this.setState({
                    navBar: "dynamic"
                });
            }
        }
    }

    render() {
        const pageNavStyle = navBar => {
            if (navBar === "dynamic") {
                return {
                    padding: "15px 0 5px 0",
                    fontFamily: "Poppins, sans-serif"
                };
            } else if (navBar === "static") {
                return {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    padding: "15px 0 5px 0",
                    paddingLeft: this.props.margin,
                    fontFamily: "Poppins, sans-serif",
                    width: "100%",
                    backgroundColor: "white",
                    borderBottom: "0.1px solid rgba(72, 72, 72, .3)",
                    color: "#008489"
                };
            }
        };

        const linkStyle = id => {
            if (id === this.state.currentSection) {
                return {
                    fontWeight: 500,
                    fontSize: 15,
                    color: "#484848"
                };
            } else {
                return {
                    fontWeight: 200,
                    fontSize: 15
                };
            }
        };

        const placeHolder = navBar => {
            if (navBar === "dynamic") {
                return {
                    height: 0
                };
            } else if (navBar === "static") {
                return {
                    height: 55
                };
            }
        };

        return (
            <div>
                <div style={placeHolder(this.state.navBar)}/>
                <div style={pageNavStyle(this.state.navBar)}>
                    <Link
                        linkUrl="#overview"
                        id="overview"
                        onClick={() => this.pageNavClick("overview")}
                    >
                        <span style={linkStyle("overview")}> Overview</span>
                    </Link>
                    <Dot/>
                    <Link
                        linkUrl="#reviews"
                        id="reviews"
                        onClick={() => this.pageNavClick("reviews")}
                    >
                        <span style={linkStyle("reviews")}> Reviews</span>
                    </Link>
                    <Dot/>
                    <Link id="host" onClick={() => this.pageNavClick("host")}>
                        <span style={linkStyle("host")}> The Host</span>
                    </Link>
                    <Dot/>
                    <Link
                        id="location"
                        onClick={() => this.pageNavClick("location")}
                    >
                        <span style={linkStyle("location")}> Location</span>
                    </Link>
                </div>
            </div>
        );
    }
}

const ProfileLink = user => {

    if (user.user === undefined) return <div/>;

    const divStyle = {
        display: "inline-block",
        textAlign: "center",
        marginTop: 17,
        verticalAlign: "top"
    };

    const imgStyle = {
        width: 60,
        borderRadius: 50
    };

    const nameStyle = {
        margin: 0,
        fontSize: 15
    };

    return (
        <div style={divStyle}>
            <img style={imgStyle} src={user.user.img}/>
            <p style={nameStyle}>{user.user.username}</p>
        </div>
    );
};

const TitleSection = info => {
    const divStyle = {
        display: "inline-block",
        margin: "10px 120px 20px 0"
    };

    const titleStyle = {
        display: "inline-block",
        width: 400,
        margin: "0 0 5px 0",
        fontSize: 36,
        fontWeight: 600,
        lineHeight: "40px"
    };

    const linkStyle = {
        textDecoration: "none",
        color: "#484848",
        fontSize: 17
    };

    //UPDATE: fix links to location & reviews... potentially add stars

    return (
        <Section>
            <div style={divStyle}>
                <p style={titleStyle}>{info.info.title}</p>
                <br/>
                <a href="#" style={linkStyle}>
                    <span>{airbnbLocation}</span>
                </a>
                <span> &middot; </span>
                <a href="#" style={linkStyle}>
                    <span>{reviews} Reviews</span>
                </a>
            </div>
            <ProfileLink user={info.info.hostprofile}/>
        </Section>
    );
};


const TextConverter = props => {
    const titleStyle = {
        fontWeight: 400,
        margin: 0
    };

    const divStyle = {
        marginTop: "-20px"
    };

    return (
        <Section idName={props.idName}>
            <div style={divStyle}>
                {props.textBlock.split("\b").map(textChunk => {
                    return (
                        <p key={props.textBlock.indexOf(textChunk)}>
                            {textChunk.split("\n").map(textLine => {
                                if (textLine.indexOf("\t") > -1) {
                                    return (
                                        <span
                                            style={titleStyle}
                                            key={textChunk.indexOf(textLine)}
                                        >
                                            {textLine}
                                        </span>
                                    );
                                } else {
                                    return (
                                        <span key={textChunk.indexOf(textLine)}>
                                            {textLine}
                                        </span>
                                    );
                                }
                            })}
                        </p>
                    );
                })}
            </div>
        </Section>
    );
};

const OverviewInfo = overviewInfoText => (
    <Section>
        <a name="overview"/>
        <br/>
        <TextConverter
            textBlock={overviewInfoText.overviewInfoText}
            idName={OverviewInfo}
        />
        <Link linkUrl="#">Contact host</Link>
    </Section>
);

const SpaceDetail = props => {
    const sectionStyle = {
        fontWeight: 300,
        margin: "0 0 10px 0"
    };

    const detailStyle = {
        fontWeight: 400
    };

    return (
        <p style={sectionStyle}>
            {props.section}
            <span style={detailStyle}>{props.children}</span>
        </p>
    );
};

const Space = () => {
    const tableDivStyle = {
        display: "inline-block",
        margin: 0,
        padding: 0,
        width: 300
    };

    return (
        <Section title="The space">
            <div style={tableDivStyle}>
                <SpaceDetail section="Accomodates: ">
                    {accomodatesD}
                </SpaceDetail>
                <SpaceDetail section="Bathrooms: ">{bath_availabilityD}</SpaceDetail>
                <SpaceDetail section="Bedrooms: ">{bedroomsD}</SpaceDetail>
                <SpaceDetail section="Beds: ">{1}</SpaceDetail>
            </div>
            <div style={tableDivStyle}>
                <SpaceDetail section="Check In: ">{checkInD}</SpaceDetail>
                <SpaceDetail section="Check Out: ">{checkOutD}</SpaceDetail>
                <SpaceDetail section="Property type: ">
                    {propertyTypeD}
                </SpaceDetail>
                <SpaceDetail section="Room type: ">{roomTypeD}</SpaceDetail>
            </div>
            <br/>
            <Link linkUrl="#houseRules">House rules</Link>
        </Section>
    );
};

const Amenity = props => {
    const divStyle = {
        display: "inline-block",
        margin: "0 0 10px 0",
        width: 300
    };

    return (
        <div style={divStyle}>
            <span style={props.style}>{props.amenity}</span>
        </div>
    );
};

// UPDATE: need a way to hide until expanded... maybe add to Redux data?... it's also not the same order as AirBnb...
const AmenitiesList = () => {
    const noStyle = {
        textDecoration: "line-through",
        color: "#767676",
        fontWeight: 200
    };

    return (
        <Section title="Amenities">
            <Section idName="amenities">
                {amenities.map((amenity, idx) => {
                    if (amenitiesIncluded[idx] === 1) {
                        return <Amenity key={idx} amenity={amenity}/>;
                    } else {
                        return (
                            <Amenity
                                key={idx}
                                style={noStyle}
                                amenity={amenity}
                            />
                        );
                    }
                })}
            </Section>
        </Section>
    );
    //UPDATE: add family amenities
};


const Accessibility = () => (
    <Section title="Accessibility">
        <TextConverter textBlock={accessibility} idName="access"/>
    </Section>
);

//UPDATE: remove reviews when section added
const Availability = () => (
    <Section title="Availability">
        <TextConverter textBlock={availability} idName="avail"/>
        <a name="reviews"/>
    </Section>
);

class HomeDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            marginLeft: "10%",
            title: "",
            description: "",
            img: [],
            user: {},
            price: "",
            room_type: "",
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
                    setup_for_guest: home.setup_for_guest,
                });

            })

        });
    }

    render() {
        const marginStyle = {
            marginLeft: this.state.marginLeft,
            marginRight: 50
        };
        const heroPic = this.state.img;
        const title = this.state.title;
        const hostprofile = this.state.user;
        const info = {title, hostprofile}
        const homeinfo = {
            beds_availability: this.state.room_availability,
            bath_availability: this.state.bath_availability,
            guest: this.state.guest_availability,
            room_type: this.state.room_type
        }

        return (
            <div>
                <Hero heroPic={heroPic}/>
                <div style={marginStyle}>
                    <PageNav margin={this.state.marginLeft}/>
                    <TitleSection
                        info={info}
                    />
                    <IconInfo homeinfo={homeinfo}/>
                    <OverviewInfo
                        overviewInfoText={this.state.description}
                    />
                    <Space/>
                    <AmenitiesList/>

                    <Accessibility/>
                    <Availability/>
                </div>
            </div>
        )
            ;
    }
}

export default HomeDetailPage;


