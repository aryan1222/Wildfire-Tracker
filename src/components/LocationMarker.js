import React from 'react';
import Icon from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({lat, lng}) => {
    return (
        <div className="location-marker">
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker