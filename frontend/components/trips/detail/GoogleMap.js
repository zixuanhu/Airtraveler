import React from "react";
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";


const CoreMap = withGoogleMap(props => {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{
                lat: props.lat,
                lng: props.lng
            }}
        >
            <Marker
                position={{
                    lat: props.lat,
                    lng: props.lng
                }}
            />
        </GoogleMap>
    );
});

const HomeGoogleMap = ({lat, lng, readyToload}) => {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    return (
        <div className={readyToload ? "" : "animated-background"}>
            <div style={readyToload ? {opacity: '1'} : {opacity: '0', marginTop: '5px'}}>
                <CoreMap
                    loadingElement={
                        <div
                            style={{
                                height: `100%`
                            }}
                        />
                    }
                    containerElement={
                        <div
                            style={{
                                height: `400px`
                            }}
                        />
                    }
                    mapElement={
                        <div
                            style={{
                                height: `100%`
                            }}
                        />
                    }
                    lat={lat}
                    lng={lng}
                />
            </div>
        </div>
    );
};

export default HomeGoogleMap;
