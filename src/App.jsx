import React, { useState, useEffect } from 'react';
import { getAirQuality, getWeather } from './apiWeather';
import AirQuality from './components/AirQuality';
import Weather from './components/Weather';
import MapComponent from './components/Map';

function App() {
    const [airQuality, setAirQuality] = useState(null);
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState({ lat: 40.7128, lon: -74.0060 });
    const [city, setCity] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (location) {
                try {
                    const airQualityData = await getAirQuality(location.lat, location.lon);
                    const weatherData = await getWeather(location.lat, location.lon);
                    setAirQuality(airQualityData.list[0]);
                    setWeather(weatherData);
                } catch (error) {
                    console.error("Error fetching data: ", error);
                }
            }
        };

        fetchData();
    }, [location]);

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter' && city) {
            const simulatedLocation = {
                lat: 37.7749,
                lon: -122.4194
            };
            setLocation(simulatedLocation);
            setCity("");
        }
    };

    return (
        <div>
            <h1>Información de la Calidad del Aire y el Clima</h1>
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
                placeholder="Ingresa una localidad y presiona Enter"
            />
            <MapComponent setLocation={setLocation} />
            {airQuality && <AirQuality airQuality={airQuality} />}
            {weather && <Weather weather={weather} />}
        </div>
    );
}

export default App;
