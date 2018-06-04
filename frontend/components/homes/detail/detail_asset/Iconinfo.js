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
const IconInfo = ({homeinfo}) => {

    return (

        <Section>
            <Icon cName="home">
                <span className={homeinfo.readyToload ? "" : "animated-background"}>
                    <span style={homeinfo.readyToload ? {opacity: '1'} : {opacity: '0'}}>
                        {homeinfo.room_type}
                    </span>
                </span>
            </Icon>
            <Icon cName="users">
                <span className={homeinfo.readyToload ? "" : "animated-background"}>
                    <span style={homeinfo.readyToload ? {opacity: '1'} : {opacity: '0'}}>
                        {homeinfo.guest_availability}guests
                    </span>
                </span>
            </Icon>
            <Icon cName="bath">
                <span className={homeinfo.readyToload ? "" : "animated-background"}>
                    <span style={homeinfo.readyToload ? {opacity: '1'} : {opacity: '0'}}>
                        {homeinfo.bath_availability}bathrooms
                    </span>
                </span>
            </Icon>
            <Icon cName="bed">
                <span className={homeinfo.readyToload ? "" : "animated-background"}>
                    <span style={homeinfo.readyToload ? {opacity: '1'} : {opacity: '0'}}>
                        {homeinfo.beds_availability}bedsrooms
                    </span>
                </span>
            </Icon>
        </Section>
    );
};
export default IconInfo