import { CoinsSortOrder, ICoin } from '../../../../../entities';

export function getSortFunction(sortOrder: CoinsSortOrder) {
    function sortFunction(a: ICoin, b: ICoin): number {
        switch (sortOrder) {
            case CoinsSortOrder.PriceAsc:
                return +a.priceUsd < +b.priceUsd ? -1 : 1;
            case CoinsSortOrder.PriceDesc:
                return +a.priceUsd > +b.priceUsd ? -1 : 1;
            case CoinsSortOrder.MarketCapAsc:
                return +a.marketCapUsd < +b.marketCapUsd ? -1 : 1;
            case CoinsSortOrder.MarketCapDesc:
                return +a.marketCapUsd > +b.marketCapUsd ? -1 : 1;
            case CoinsSortOrder.ChangeAsc:
                return +a.changePercent24Hr < +b.changePercent24Hr ? -1 : 1;
            case CoinsSortOrder.ChangeDesc:
                return +a.changePercent24Hr > +b.changePercent24Hr ? -1 : 1;
        }
    }
    return sortFunction;
}
