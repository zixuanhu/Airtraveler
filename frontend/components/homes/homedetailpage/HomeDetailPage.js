import React from "react";
import classnames from "classnames";

const profilePic =
    "https://a0.muscache.com/im/pictures/5c660f61-f3f0-4fba-a1bb-7a6ca78556d2.jpg?aki_policy=profile_x_medium";
const price = "$175";

const hostName = "Luxury Villas";
const rentalSize = "Entire home/apt";
const guests = "2 guests";
const bedrooms = "1 bedroom";
const beds = "1 bed";
const bedTypes = "1 king bed";
const houseRules =
    "No smoking\b\
Not suitable for pets\b\
No parties or events\b\
Check in time is 3PM - 10PM\b\
We would like to bring your attention to a few request while you enjoy your stay:\b\
\
1. As this is a private home, your respectful use of furnishings, decor, facilities is truly appreciated. Quiet hours 11 pm-8 am. Max occupancy determined at the time of your reservation. US 50 per night per person will be charge when default on notifying the correct number of parties.\b\
\
2. Suntan lotion easily damages furnishings. Please keep this on mind when sitting down.\b\
\
3. This is a NON SMOKING property but you are welcome to do so in the balcony area. Thank you for your respect for future visitors staying after you.\b\
\
4. No PETS allowed.\b\
\
5. AC is operated with associated remote control in the room. Please don't leave the air conditioning running while not in the condo or in the room or while windows are open. It only takes a few minutes to cool down the room when the air conditioning is turned on. We attempt to keep our rental rates competitive, so your assistance in limiting the use of AC is truly appreciated.\b\
\
6. Wi Fi Network provided while checking in.\b\
\
7. GARBAGE is to be placed at the white garbage bins located on guest parking space on highway 200 entrance door.\b\
\
8. MAID SERVICES provided once per week. If maid services are required more than this, arrangements can be made at an additional price.\b\
\
9. ROOF GARDEN use of the infinity pool, Jacuzzi, BBQ, GYM and the rest of amenities are available 8 am-10 pm. Please notice, you are required to keep the area clean after use.\b\
\
10. PARKING allowed only at the assigned spot (next to the elevator). We require advanced notice you will use the parking to provide a remote control to operate garage door.\b\
\
11. Interphone provided when checking in.\b\
\
A second misbehavior warning will result in guest vacating the Premises with no refund.\b\
\
Additional information about rental rates\n\
*Approximate Monthly rates, actual rate will depend on the days of the month you stay\b\
\
Property Policy: Romantic Amapas under no circumstance will be held responsible for any guest who does not respect said policies, failure to abide will result in the cancellation of the reservation and/or eviction from the vacation property without any right of refund.\b\
\
Check-in: The normal check-in time is 3:00 pm and check-out time is 12:00 pm. We will meet you at the property and give you one set of keys and inspect the property with you to assure that all is well. If you will need more than one set of keys or if you need a special check-in or check-out time please let us know and we will do our best to accommodate you.\b\
\
Hold Harmless: Romantic Amapas and the property owners will be held harmless for any problems, injuries, loss or damage to the property or to any persons occupying the rental property. Problems relating to construction and construction noises are not controllable by Romantic Amapas or the property owners and we will in no way be held responsible.\b\
\
Number of Guests: The number of guests shown on your booking confirmation is the maximum allowed to occupy the rental property. If you exceed the max capacity of the unit you will be charged an additional $50 USD per night per additional person and will be allowed to occupy the property only if the property owner and/or representative approves and if the property can properly accommodate you. If guest fails to notify Romantic Amapas or anyone and brings more people into the property, the guest will have to leave the property immediately without any refund including the security deposit if applicable.\b\
\
Should you require anything during your stay you can (EMAIL HIDDEN) or call +(PHONE NUMBER HIDDEN)\b\
\
Enjoy your stay.";
const cancellations =
    "Super Strict 60\b\
\
Cancel up to 60 days before check in and get a 50% refund (minus service fees). Cancel within 60 days of your trip and the reservation is non-refundable. Service fees are refunded when cancellation happens before check in and within 48 hours of booking.";
const safetyFeatures = "First aid kit";
const accessibility = "Elevator";
const availability = "5 nights minimum stay";
const accomodatesD = 3;
const bathroomsD = 2;
const bedroomsD = 1;
const bedsD = 1;
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
const extraPeople = "No Charge";
const securityDeposit = "$500";
const airbnbLocation = "Puerto Vallarta, Jalisco, Mexico";
const reviews = 46;

const Hero = heroPic => {
    const divStyle = {
        position: "relative",
        backgroundImage: "url(" + heroPic.heroPic + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 320
    };

    const photosButtonStyle = {
        position: "absolute",
        bottom: 0,
        margin: "0 0 15px 15px",
        fontSize: 13,
        padding: "8px 20px",
        fontFamily: "Poppins, sans-serif",
        color: "#484848",
        fontWeight: 500,
        borderRadius: 4,
        backgroundColor: "white",
        border: "1px solid #c4c4c4"
    };

    return (
        <div style={divStyle}>
            <button id="viewPhotos" style={photosButtonStyle}>
                View Photos
            </button>
        </div>
    );
};

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
                <div style={placeHolder(this.state.navBar)} />
                <div style={pageNavStyle(this.state.navBar)}>
                    <Link
                        linkUrl="#overview"
                        id="overview"
                        onClick={() => this.pageNavClick("overview")}
                    >
                        <span style={linkStyle("overview")}> Overview</span>
                    </Link>
                    <Dot />
                    <Link
                        linkUrl="#reviews"
                        id="reviews"
                        onClick={() => this.pageNavClick("reviews")}
                    >
                        <span style={linkStyle("reviews")}> Reviews</span>
                    </Link>
                    <Dot />
                    <Link id="host" onClick={() => this.pageNavClick("host")}>
                        <span style={linkStyle("host")}> The Host</span>
                    </Link>
                    <Dot />
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

const ProfileLink = () => {
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
            <img style={imgStyle} src={profilePic} />
            <p style={nameStyle}>{hostName}</p>
        </div>
    );
};

const TitleSection = title => {
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
                <p style={titleStyle}>{title.title}</p>
                <br />
                <a href="#" style={linkStyle}>
                    <span>{airbnbLocation}</span>
                </a>
                <span> &middot; </span>
                <a href="#" style={linkStyle}>
                    <span>{reviews} Reviews</span>
                </a>
            </div>
            <ProfileLink />
        </Section>
    );
};

const Icon = props => {
    const cName = "fa fa-2x fa-" + props.cName;
    const divStyle = {
        display: "inline-block",
        padding: "10px 20px",
        margin: "0 45px 0 0",
        textAlign: "center"
    };

    const paraStyle = {
        margin: "0 0 5px 0",
        fontSize: 14
    };

    return (
        <div style={divStyle}>
            <i className={cName} aria-hidden="true" />
            <p style={paraStyle}>{props.children}</p>
        </div>
    );
};

const IconInfo = () => {
    return (
        <Section>
            <Icon cName="home">{rentalSize}</Icon>
            <Icon cName="users">{guests}</Icon>
            <Icon cName="bath">{bedrooms}</Icon>
            <Icon cName="bed">{beds}</Icon>
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
        <a name="overview" />
        <br />
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
                <SpaceDetail section="Bathrooms: ">{bathroomsD}</SpaceDetail>
                <SpaceDetail section="Bedrooms: ">{bedroomsD}</SpaceDetail>
                <SpaceDetail section="Beds: ">{bedsD}</SpaceDetail>
            </div>
            <div style={tableDivStyle}>
                <SpaceDetail section="Check In: ">{checkInD}</SpaceDetail>
                <SpaceDetail section="Check Out: ">{checkOutD}</SpaceDetail>
                <SpaceDetail section="Property type: ">
                    {propertyTypeD}
                </SpaceDetail>
                <SpaceDetail section="Room type: ">{roomTypeD}</SpaceDetail>
            </div>
            <br />
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
                        return <Amenity key={idx} amenity={amenity} />;
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

const Prices = () => {
    const msgStyle = {
        fontSize: 14
    };

    const boldStyle = {
        fontWeight: 400
    };

    const divStyle = {
        width: 300,
        display: "inline-block",
        marginBottom: 20
    };

    return (
        <Section title="Prices">
            <div>
                <div style={divStyle}>
                    <span>Extra people </span>
                    <span style={boldStyle}>{extraPeople}</span>
                </div>
                <div style={divStyle}>
                    <span>Security Deposit </span>
                    <span style={boldStyle}>{securityDeposit}</span>
                </div>
            </div>
            <div style={msgStyle}>
                <span style={boldStyle}>Always communicate through Airbnb</span>
                <br />
                <span>
                    To protect your payment, never transfer money or communicate
                    outside of the Airbnb website or app.
                </span>
                <Link
                    linkUrl="https://www.airbnb.com/help/article/199"
                    target="_blank"
                >
                    Learn more
                </Link>
            </div>
        </Section>
    );
};

const Bedroom = props => {
    const divStyle = {
        borderRadius: 5,
        width: 140,
        margin: "0 10px 20px 0",
        display: "inline-block"
    };

    const bedroomsStyle = {
        margin: "5px 0 0 0",
        fontWeight: 400
    };

    return (
        <div style={divStyle}>
            <i className="fa fa-2x fa-bed" aria-hidden="true" />
            <p style={bedroomsStyle}>Bedroom {props.number}</p>
            <span>{props.bed}</span>
        </div>
    );
};

const SleepingArrangements = () => {
    // Redux Update
    const bedroomDetails = ["1 king bed", "2 twin beds"];

    return (
        <Section title="Sleeping arrangements">
            {bedroomDetails.map((bed, idx) => {
                return (
                    <Bedroom
                        bed={bed}
                        key={idx}
                        number={bedroomDetails.indexOf(bed) + 1}
                    />
                );
            })}
        </Section>
    );
};

const HouseRules = () => (
    <Section title="House rules">
        <a name="houseRules" />
        <TextConverter textBlock={houseRules} idName="house" />
    </Section>
);

const Cancellations = () => (
    <Section title="Cancellations">
        <TextConverter textBlock={cancellations} idName="cancel" />
    </Section>
);

const SafetyFeatures = () => (
    <Section title="Safety featuers">
        <TextConverter textBlock={safetyFeatures} idName="safe" />
    </Section>
);

const Accessibility = () => (
    <Section title="Accessibility">
        <TextConverter textBlock={accessibility} idName="access" />
    </Section>
);

//UPDATE: remove reviews when section added
const Availability = () => (
    <Section title="Availability">
        <TextConverter textBlock={availability} idName="avail" />
        <a name="reviews" />
    </Section>
);

class HomeDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            marginLeft: "10%",
            home_title: "",
            home_img: "",
            home_description: ""
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
        const home_id = this.props.params.home_id;

        this.props.gethome(home_id).then(respond => {
            this.setState({
                home_title: this.props.home.title,
                home_img: this.props.home.img,
                home_description: this.props.home.description
            });
        });
    }
    render() {
        const marginStyle = {
            marginLeft: this.state.marginLeft,
            marginRight: 50
        };

        return (
            <div>
                <Hero heroPic={this.state.home_img} />
                <div style={marginStyle}>
                    <PageNav margin={this.state.marginLeft} />
                    <TitleSection title={this.state.home_title} />
                    <IconInfo />
                    <OverviewInfo
                        overviewInfoText={this.state.home_description}
                    />
                    <Space />
                    <AmenitiesList />
                    <Prices />
                    <SleepingArrangements />
                    <HouseRules />
                    <Cancellations />
                    <SafetyFeatures />
                    <Accessibility />
                    <Availability />
                </div>
            </div>
        );
    }
}

export default HomeDetailPage;
