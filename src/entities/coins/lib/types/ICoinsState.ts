import { CoinHistoryPeriod } from '../../types';
import { CoinsSortOrder } from '../../types/CoinsSortOrder';

export interface ICoinsState {
    limit: number;
    offset: number;
    searchedCoins: string;
    sortOrder: CoinsSortOrder;
    period: CoinHistoryPeriod;
}
