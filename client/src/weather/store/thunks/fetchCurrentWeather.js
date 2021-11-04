import {WeatherService} from "../../services/WeatherService";
import {currentWeatherSlice} from "../slices/currentWeatherSlice";

export const fetchCurrentWeather = (payload) => async (dispatch) => {
    try {
        dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
        const res = await WeatherService.getCurrentWeather(payload);
        if (res.status === 200) {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
        } else {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
        }
    } catch (e) {
        console.log(e);
    }
}

export const fetchWeekWeather = async (payload) => {
    try {
        return (await WeatherService.getWeekWeather(payload)).data;
    } catch (e) {
        console.log(e);
    }
}
