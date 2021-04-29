import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';

const Map = ({center, zoom, mapKey}) => {
    return (
        <div className="map">

            <GoogleMapReact
                bootstrapURLKeys = {{key: mapKey}}
                defaultCenter = {center}
                defaultZoom = {zoom}>

                <LocationMarker lat={center.lat} lng={center.lng}/>
            </GoogleMapReact>

        </div>
    )
}

Map.defaultProps = {
    center : {
        lat : 42.3265,
        lng : -122.8576 
    },
    zoom : 6,
    mapKey : process.env.GOOGLE_MAP_KEY
}

export default Map
