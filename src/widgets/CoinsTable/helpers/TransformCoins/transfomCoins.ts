import { ICoin } from '../../../../entities';
import { ICoinsTransformOptions } from './types';
import { getSearchFilter, getSortFunction, zeroValueFilter } from './utils';

export function transformCoins(
    coins: ICoin[],
    options: ICoinsTransformOptions,
): ICoin[] {
    const result: ICoin[] = coins
        .filter(zeroValueFilter)
        .filter(getSearchFilter(options.searchedCoins));
    result.sort(getSortFunction(options.sortOrder));
    return result;
}
