import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCALSTORAGE_PORTFOLIO_KEY } from '../../../shared';
import { ICoin } from '../../coins';
import { IPortfolioState } from '../types';

function getInitialState(): IPortfolioState {
    const localCoins: string | null = localStorage.getItem(LOCALSTORAGE_PORTFOLIO_KEY);
    if (localCoins) {
        const coins: (ICoin & { count: number })[] = JSON.parse(localCoins);
        return {
            coins: coins,
            summary: coins.reduce<number>((acc, coin) => acc + +coin.priceUsd, 0),
        };
    }
    return {
        coins: [],
        summary: 0,
    };
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState: getInitialState(),
    reducers: {
        addCoin: (state, action: PayloadAction<ICoin>) => {
            const coin = state.coins.find((c) => c.id === action.payload.id);
            if (coin) {
                coin.count += 1;
            } else {
                state.coins.push({ ...action.payload, count: 1 });
            }
            state.summary += +action.payload.priceUsd;
            localStorage.setItem(LOCALSTORAGE_PORTFOLIO_KEY, JSON.stringify(state.coins));
        },
        removeCoin: (state, action: PayloadAction<ICoin>) => {
            const coin = state.coins.find(
                (c) => c.priceUsd === action.payload.priceUsd && c.name === action.payload.name,
            );
            if (coin) {
                state.coins = state.coins.filter((c) => c.id !== coin.id);
                state.summary -= +coin.priceUsd * coin.count;
                localStorage.setItem(LOCALSTORAGE_PORTFOLIO_KEY, JSON.stringify(state.coins));
            }
        },
    },
});

export const { addCoin, removeCoin } = portfolioSlice.actions;
