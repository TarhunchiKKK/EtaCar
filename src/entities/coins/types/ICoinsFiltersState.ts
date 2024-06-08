import { CoinsSortOrder } from './CoinsSortOrder';

export interface ICoinsFiltersState {
    limit: number;
    offset: number;
    searchedCoins: string;
    sortOrder: CoinsSortOrder;
}
