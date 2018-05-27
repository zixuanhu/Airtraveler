import React from "react";
import Linkify from 'react-linkify';

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

const TextConverter = props => {
    const titleStyle = {
        fontWeight: 400,
        margin: 0
    };

    const divStyle = {
        marginTop: "-20px"
    };

    return (
        <Section>
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

const OverviewInfo = ({overviewInfoText, host_info}) => (

    <Section>
        <a name="overview"/>
        <br/>
        <TextConverter
            textBlock={overviewInfoText}
            idName={OverviewInfo}
        />

        <a role="button" data-toggle="collapse" href="#collapseExample"
           aria-expanded="false" aria-controls="collapseExample">
            Contact host
        </a>
        <div className="collapse" id="collapseExample">
            <div className="well">
                <li>
                    email:<Linkify>{host_info.email}</Linkify>
                </li>
                <li>
                    phone:{host_info.phonenumber}
                </li>

            </div>
        </div>
    </Section>
);
export default OverviewInfo