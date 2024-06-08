import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CoinsSortOrder, ICoinsFiltersState } from '../types';

const initialState: ICoinsFiltersState = {
    limit: 20,
    offset: 0,
    searchedCoins: '',
    sortOrder: CoinsSortOrder.priceAsc,
};

export const coinsFiltersSlice = createSlice({
    name: 'coinsFilters',
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
    },
});

export const { setLimit, setSearchedCoins, setSortOrder, setOffset } =
    coinsFiltersSlice.actions;
