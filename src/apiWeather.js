import axios from 'axios';

const API_KEY = '45bde6c2887db08cfea4858adf5586eb';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getAirQuality = async (lat, lon) => {
    const response = await axios.get(`${BASE_URL}/air_pollution`, {
        params: {
            lat,
            lon,
            appid: API_KEY,
        },
    });
    return response.data;
};

export const getWeather = async (lat, lon) => {
    const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
            lat,
            lon,
            units: 'metric',
            appid: API_KEY,  // Incluye el appid en la solicitud
        },
    });
    return response.data;
};
