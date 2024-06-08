import { ICoin } from '../../../../../entities';

export function getSearchFilter(searchCoins: string) {
    function searchFilter(coin: ICoin): boolean {
        if (searchCoins) {
            return coin.name.toLowerCase().includes(searchCoins.toLowerCase());
        }
        return true;
    }
    return searchFilter;
}
