import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { coinsApi, coinsFiltersSlice, portfolioSlice } from '../../entities';

export const store = configureStore({
    reducer: {
        [portfolioSlice.name]: portfolioSlice.reducer,
        [coinsFiltersSlice.name]: coinsFiltersSlice.reducer,
        [coinsApi.reducerPath]: coinsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coinsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
