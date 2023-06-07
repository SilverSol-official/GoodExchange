import {
    configureStore
} from '@reduxjs/toolkit'
import themeReducer from './features/Theme/theme';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})