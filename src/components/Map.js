import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

const Map = ({eventData, center, zoom, mapKey}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((event)=> {
        
        if(event.categories[0].id === 8){
            const coords = event.geometries[0].coordinates;
            return <LocationMarker key={event.id} lat={coords[1]} lng={coords[0]} 
            onClick={() => setLocationInfo({id : event.id, title : event.title}) }/>
        }

        return null;
    })

    return (
        <div className="map">

            <GoogleMapReact
                bootstrapURLKeys = {{key: mapKey}}
                defaultCenter = {center}
                defaultZoom = {zoom}>
                
                {markers}

            </GoogleMapReact>

            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center : {
        lat : 42.3265,
        lng : -122.8576 
    },
    zoom : 4,
    mapKey : process.env.GOOGLE_MAP_KEY
}

export default Map
