import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({center, zoom, mapKey}) => {
    return (
        <div className="map">

            <GoogleMapReact
                bootstrapURLKeys = {{key: mapKey}}
                defaultCenter = {center}
                defaultZoom = {zoom}>

            </GoogleMapReact>

        </div>
    )
}

Map.defaultProps = {
    center : {
        lat : 28.6139,
        lng : 77.2090
    },
    zoom : 8,
    mapKey : process.env.GOOGLE_MAP_KEY
}

export default Map
