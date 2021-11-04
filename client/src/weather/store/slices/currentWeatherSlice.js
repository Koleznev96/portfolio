import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    weather: {
        weather: [
            {
                description: "",
                icon: ""
            }
        ],
        main: {
            temp: 0,
            pressure: 0,
            feels_like: 0,
        },
        wind: {
            speed: 0
        },
        dt: 0,
        name: "",
        timezone: 0,
    },
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }
}

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state, action) {
            state.isLoading = false;
            state.weather = action.payload.data;
            state.reducers = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
        fetchCurrentWeatherError(state, action) {
            state.isLoading = false;
            state.reducers = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
    }
});

export default currentWeatherSlice.reducer;
