import React from 'react';

const AirQuality = ({ airQuality }) => {
    return (
        <div>
            <h3>Air Quality Index (AQI): {airQuality.main.aqi}</h3>
            <ul>
                <li>PM2.5: {airQuality.components.pm2_5} µg/m³</li>
                <li>PM10: {airQuality.components.pm10} µg/m³</li>
                <li>Ozone (O3): {airQuality.components.o3} µg/m³</li>
                <li>Nitrogen Dioxide (NO2): {airQuality.components.no2} µg/m³</li>
                <li>Sulfur Dioxide (SO2): {airQuality.components.so2} µg/m³</li>
                <li>Carbon Monoxide (CO): {airQuality.components.co} µg/m³</li>
            </ul>
        </div>
    );
};

export default AirQuality;
