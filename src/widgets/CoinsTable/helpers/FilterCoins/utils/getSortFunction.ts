import { CoinsSortOrder, ICoin } from '../../../../../entities';

export function getSortFunction(sortOrder: CoinsSortOrder) {
    function sortFunction(a: ICoin, b: ICoin): number {
        switch (sortOrder) {
            case CoinsSortOrder.priceAsc:
                return +a.priceUsd < +b.priceUsd ? -1 : 1;
            case CoinsSortOrder.priceDesc:
                return +a.priceUsd > +b.priceUsd ? -1 : 1;
            case CoinsSortOrder.marketCapAsc:
                return +a.marketCapUsd < +b.marketCapUsd ? -1 : 1;
            case CoinsSortOrder.marketCapDesc:
                return +a.marketCapUsd > +b.marketCapUsd ? -1 : 1;
            case CoinsSortOrder.changeAsc:
                return +a.changePercent24Hr < +b.changePercent24Hr ? -1 : 1;
            case CoinsSortOrder.changeDesc:
                return +a.changePercent24Hr > +b.changePercent24Hr ? -1 : 1;
        }
    }
    return sortFunction;
}
