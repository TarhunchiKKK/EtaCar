import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCALSTORAGE_PORTFOLIO_KEY } from '../../../shared';
import { ICoin } from '../../coins';
import { IPortfolioState } from '../types';

function getInitialState(): IPortfolioState {
    const localCoins: string | null = localStorage.getItem(
        LOCALSTORAGE_PORTFOLIO_KEY,
    );
    if (localCoins) {
        const coins: ICoin[] = JSON.parse(localCoins);
        return {
            coins: coins,
            summary: coins.reduce<number>(
                (acc, coin) => acc + coin.priceUsd,
                0,
            ),
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
            state.coins.push(action.payload);
            state.summary += action.payload.priceUsd;
            localStorage.setItem(
                LOCALSTORAGE_PORTFOLIO_KEY,
                JSON.stringify(state.coins),
            );
        },
    },
});

export const { addCoin } = portfolioSlice.actions;
