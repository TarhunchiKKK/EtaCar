import { ICoin } from '../../../../../entities';

const zeroValue: number = 0.01;

export function zeroValueFilter(coin: ICoin): boolean {
    if (Math.abs(+coin.priceUsd) <= zeroValue) {
        return false;
    }

    if (Math.abs(+coin.changePercent24Hr) <= zeroValue) {
        return false;
    }

    if (Math.abs(+coin.marketCapUsd) <= zeroValue) {
        return false;
    }

    return true;
}
