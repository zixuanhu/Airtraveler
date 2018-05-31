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
const ProfileLink = ({user}) => {
    // debugger
    if (user === undefined) return <div/>;

    const divStyle = {
        display: "inline-block",
        textAlign: "center",
        marginTop: 17,
        verticalAlign: "top"
    };

    const imgStyle = {
        width: 60,
        height: 60,
        borderRadius: 50
    };

    const nameStyle = {
        margin: 0,
        fontSize: 15
    };

    return (
        <div style={divStyle}>
            <img style={imgStyle} src={user.img}/>
            <p style={nameStyle}>{user.username}</p>
        </div>
    );
};
const TitleSection = ({info}) => {

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
                <p style={titleStyle}>{info.title}</p>
            </div>
            <ProfileLink user={info.hostprofile}/>
        </Section>
    );
};

export default TitleSection;