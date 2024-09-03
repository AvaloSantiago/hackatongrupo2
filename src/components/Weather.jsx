import React from 'react';

const Weather = ({ weather }) => {
    return (
        <div>
            <h3>Current Weather</h3>
            <ul>
                <li>Temperature: {weather.main.temp}°C</li>
                <li>Humidity: {weather.main.humidity}%</li>
                <li>Wind Speed: {weather.wind.speed} m/s</li>
            </ul>
        </div>
    );
};

export default Weather;