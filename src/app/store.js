import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../components/Redux/car/carSlice";

export const store = configureStore({
    reducer: {
        car: carReducer
    },
});