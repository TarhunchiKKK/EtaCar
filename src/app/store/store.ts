import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { coinsApi } from '../../entities';

export const store = configureStore({
    reducer: {
        [coinsApi.reducerPath]: coinsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(coinsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
