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
            <i className={cName} aria-hidden="true"/>
            <p style={paraStyle}>{props.children}</p>
        </div>
    );
};
const IconInfo = homeinfo => {

    return (
        <Section>
            <Icon cName="home">{homeinfo.homeinfo.room_type}</Icon>
            <Icon cName="users">{homeinfo.homeinfo.guest}guests</Icon>
            <Icon cName="bath">{homeinfo.homeinfo.bath_availability}bathrooms</Icon>
            <Icon cName="bed">{homeinfo.homeinfo.beds_availability}bedsrooms</Icon>
        </Section>
    );
};
export default IconInfo