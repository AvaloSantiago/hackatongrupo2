import React, { useState, useEffect } from 'react';
import { getAirQuality, getWeather } from './apiWeather';
import AirQuality from './components/AirQuality';
import Weather from './components/Weather';
import MapComponent from './components/Map';

function App() {
    const [airQuality, setAirQuality] = useState(null);
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState({ lat: 40.7128, lon: -74.0060 });

    useEffect(() => {
      const fetchData = async () => {
          if (location) {
              try {
                  const airQualityData = await getAirQuality(location.lat, location.lng);
                  const weatherData = await getWeather(location.lat, location.lng);
                  setAirQuality(airQualityData.list[0]);
                  setWeather(weatherData);
              } catch (error) {
                  console.error("Error fetching data: ", error);
              }
          }
      };

      fetchData();
  }, [location]);

  return (
      <div>
          <h1>Información de la Calidad del Aire y el Clima</h1>
          <MapComponent setLocation={setLocation} />
          {airQuality && <AirQuality airQuality={airQuality} />}
          {weather && <Weather weather={weather} />}
      </div>
  );
}

export default App;
