import { CoinsSortOrder } from '../../../../../entities';

export interface ICoinsFilterOptions {
    sortOrder: CoinsSortOrder;
    searchedCoins: string;
}
