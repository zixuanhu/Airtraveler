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
                <SpaceDetail section="Accomodates: ">
                    {homeInfo.guest_availability}
                </SpaceDetail>
                <SpaceDetail section="Bathrooms: ">
                    {homeInfo.bath_availability}
                </SpaceDetail>
                <SpaceDetail section="Bedrooms: ">{homeInfo.beds_availability}</SpaceDetail>
                <SpaceDetail section="Property type: ">
                    {homeInfo.property_type}
                </SpaceDetail>
                <SpaceDetail section="Room type: ">{homeInfo.room_type}</SpaceDetail>
                <SpaceDetail section="target: ">{homeInfo.target}</SpaceDetail>
                <SpaceDetail section="setup plan: ">{homeInfo.setup_plan}</SpaceDetail>
            </div>

            <br/>

        </Section>
    );
};
export default Space