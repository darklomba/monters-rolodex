import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import { Polygon } from './polygon.js'

const center = [-34.8579, -58.0528];

export const MyMap = (props) => {

    return (
        <MapContainer center={center} rotate={true} zoom={17} scrollWheelZoom={true} bearing={329.2} fullWidth>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            { props.households.map(household => (
                < Polygon key={household.id} polygon={household.polygon} status={household.status} suscribed={household.suscribed}/>
                ))
            }
        </MapContainer>
    );
    
};