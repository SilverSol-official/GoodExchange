import {
    configureStore
} from '@reduxjs/toolkit'
import themeReducer from './features/Theme/theme';
import currencyReducer from './features/Currencies/currencies';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        currency: currencyReducer,
    },
})