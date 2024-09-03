// src/components/Map.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ setLocation }) => {
    const [position, setPosition] = useState(null);

    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setPosition(e.latlng);
                setLocation(e.latlng);
            }
        });

        return position === null ? null : (
            <Marker position={position}></Marker>
        );
    };

    return (
        <MapContainer center={[51.505, -0.09]} zoom={3} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    );
};

export default MapComponent;
