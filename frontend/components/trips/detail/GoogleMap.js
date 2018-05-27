import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD-ItGZm4M2T9YPPL8Lzn4H1mSueAjFFlQ&v=3.exp&libraries=geometry,drawing,places`;

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

const HomeGoogleMap = ({ lat, lng }) => {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    return (
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
    );
};

export default HomeGoogleMap;
