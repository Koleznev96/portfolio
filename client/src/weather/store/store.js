import {configureStore, combineReducers} from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";

const rootReducer = combineReducers({
    currentWeatherSliceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }
    ),
});
