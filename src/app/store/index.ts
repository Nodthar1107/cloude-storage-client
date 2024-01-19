import { configureStore } from "@reduxjs/toolkit";
import { userOptionsReducer } from "./OptionsSlice";

export const store = configureStore({
    reducer: {
        userOptionsReducer: userOptionsReducer
    }
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
