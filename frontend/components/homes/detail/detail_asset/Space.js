import React from "react";

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

const Space = ({homeInfo}) => {
    const tableDivStyle = {
        display: "inline-block",
        margin: 0,
        padding: 0,
        width: 300
    };

    return (
        <Section title="The space">
            <div style={tableDivStyle}>
                <div className={homeInfo.readyToload ? "" : "animated-background"}>
                    <div style={homeInfo.readyToload ? {opacity: '1'} : {opacity: '0', marginTop: '5px'}}>
                        <SpaceDetail section="Accomodates: ">
                            {homeInfo.guest_availability}
                        </SpaceDetail>
                    </div>
                </div>
                <div className={homeInfo.readyToload ? "" : "animated-background"}>
                    <div style={homeInfo.readyToload ? {opacity: '1'} : {opacity: '0', marginTop: '5px'}}>
                        <SpaceDetail section="Bathrooms: ">
                            {homeInfo.bath_availability}
                        </SpaceDetail>
                    </div>
                </div>
                <div className={homeInfo.readyToload ? "" : "animated-background"}>
                    <div style={homeInfo.readyToload ? {opacity: '1'} : {opacity: '0', marginTop: '5px'}}>
                        <SpaceDetail section="Bedrooms: ">{homeInfo.beds_availability}</SpaceDetail>
                    </div>
                </div>
                <div className={homeInfo.readyToload ? "" : "animated-background"}>
                    <div style={homeInfo.readyToload ? {opacity: '1'} : {opacity: '0', marginTop: '5px'}}>
                        <SpaceDetail section="Property type: ">
                            {homeInfo.property_type}
                        </SpaceDetail>
                    </div>
                </div>
                <div className={homeInfo.readyToload ? "" : "animated-background"}>
                    <div style={homeInfo.readyToload ? {opacity: '1'} : {opacity: '0', marginTop: '5px'}}>
                        <SpaceDetail section="Room type: ">{homeInfo.room_type}</SpaceDetail>
                    </div>
                </div>

                <div className={homeInfo.readyToload ? "" : "animated-background"}>
                    <div style={homeInfo.readyToload ? {opacity: '1'} : {opacity: '0', marginTop: '5px'}}>
                        <SpaceDetail section="target: ">{homeInfo.target}</SpaceDetail>
                    </div>
                </div>
                <div className={homeInfo.readyToload ? "" : "animated-background"}>
                    <div style={homeInfo.readyToload ? {opacity: '1'} : {opacity: '0', marginTop: '5px'}}>
                        <SpaceDetail section="setup plan: ">{homeInfo.setup_plan}</SpaceDetail>
                    </div>
                </div>


            </div>

            <br/>

        </Section>
    );
};
export default Space