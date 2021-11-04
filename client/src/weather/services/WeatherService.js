import api from "../axios";

export class WeatherService {
    static getCurrentWeather(city) {
        return api.get(`/weather?q=${city}`);
    }

    static getWeekWeather(coord) {
        return api.get(`/onecall?lat=${coord.lat}&lon=${coord.lon}`);
    }
}
