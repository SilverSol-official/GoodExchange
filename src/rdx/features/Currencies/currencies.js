import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    v4 as uuidv4
} from "uuid";

export const fetchAllCurrencies = createAsyncThunk(
    'currencies/fetchAllCurrencies',
    async () => {
        const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;
        try {
            const responce = await fetch(url);
            const data = await responce.json();
            return data;
        } catch (error) {
            throw new Error('error');
        }


    }
);

export const fetchCurrency = createAsyncThunk(
    'currencies/fetchCurrency', // Уникальное имя для этого санка
    async (cur) => {
        const code = cur.toUpperCase();
        const date = new Date;
        const curYear = date.getFullYear();
        let month = date.getMonth() + 1;
        if (month <= 9) {
            month = '0' + month;
        }
        const day = date.getDate();
        const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${code}&date=${''+curYear+month+day}&json`;
        console.log(url)
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            // Обработка ошибок, если запрос не удался
            throw Error('Failed to fetch data');
        }
    }
);

const setError = (state, action) => {
    state.currencyStatus = 'rejected';
    state.currencyError = action.payload;
}

const initialState = {
    currencyData: [],
    currencyStatus: 'loading',
    currencyError: null,
    oneCurrencyData: {},
    oneCurrencyStatus: 'loading',
    oneCurrencyError: null,
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAllCurrencies.pending]: (state) => {
            state.currencyStatus = 'loading';
            state.currencyError = null;
            console.log('pending');
        },
        [fetchAllCurrencies.fulfilled]: (state, action) => {
            state.currencyStatus = 'resolved';
            state.currencyData = action.payload;
            state.currencyData.forEach((item) => {
                Object.assign(item, {
                    id: uuidv4(),
                });
            });
            console.log('state all info', state.currencyData);
        },
        [fetchAllCurrencies.rejected]: setError,
        [fetchCurrency.pending]: (state) => {
            state.oneCurrencyStatus = 'loading';
            state.oneCurrencyError = null;
            console.log('pending');
        },
        [fetchCurrency.fulfilled]: (state, action) => {
            state.oneCurrencyStatus = 'resolved';
            state.oneCurrencyData = action.payload;
            console.log('state one info', state.oneCurrencyData);
        },
        [fetchCurrency.rejected]: setError,
    }
})

// Action creators are generated for each case reducer function
// export const {

// } = currencySlice.actions

export default currencySlice.reducer