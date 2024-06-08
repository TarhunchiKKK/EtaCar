import { ICoin } from '../../../../entities';
import { ICoinsFilterOptions } from './types';
import { getSearchFilter, getSortFunction, zeroValueFilter } from './utils';

export function filterCoins(coins: ICoin[], options: ICoinsFilterOptions): ICoin[] {
    return coins
        .filter(zeroValueFilter)
        .filter(getSearchFilter(options.searchedCoins))
        .sort(getSortFunction(options.sortOrder));
}
