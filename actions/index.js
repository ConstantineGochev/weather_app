const API_KEY = 'c456ec44194d7de0bb36171071c58cfc';
import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetch_weather(city) {
    const url = `${ROOT_URL}&q=${city},gr`;
    const request = axios.get(url)
    console.log('Request: ', request);
    return {
        type: FETCH_WEATHER,
        payload: request

    };
       
}