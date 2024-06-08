import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICoinsState } from './types';
import { CoinHistoryPeriod, CoinsSortOrder } from '../types';

const initialState: ICoinsState = {
    limit: 20,
    offset: 0,
    searchedCoins: '',
    sortOrder: CoinsSortOrder.priceAsc,
    period: CoinHistoryPeriod.Day,
};

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setSearchedCoins: (state, action: PayloadAction<string>) => {
            state.searchedCoins = action.payload;
        },
        setSortOrder: (state, action: PayloadAction<CoinsSortOrder>) => {
            state.sortOrder = action.payload;
        },
        setOffset: (state, action: PayloadAction<number>) => {
            state.offset = action.payload;
        },
        setPeriod: (state, action: PayloadAction<CoinHistoryPeriod>) => {
            state.period = action.payload;
        },
    },
});

export const { setLimit, setSearchedCoins, setSortOrder, setOffset, setPeriod } = coinsSlice.actions;
