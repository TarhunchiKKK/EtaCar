import { CoinsSortOrder } from './CoinsSortOrder';

export interface ICoinsFiltersState {
    limit: number;
    searchedCoins: string;
    sortOrder: CoinsSortOrder;
}
