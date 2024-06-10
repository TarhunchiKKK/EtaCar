import { useAppSelector } from '../../../app/store/store';
import { useGetCoinsByIdsQuery } from '../../../entities';

function usePortfolioCostDifferences() {
    const { coins: oldCoins, summary: oldSummary } = useAppSelector((state) => state.portfolio);
    const { data: newCoins } = useGetCoinsByIdsQuery(oldCoins.map((coin) => coin.id));

    let difference: number = 0;
    let percents: number = 0;

    if (newCoins) {
        let newSummary: number = 0;

        for (let newCoin of newCoins) {
            const oldCoin = oldCoins.find((c) => c.id === newCoin.id);
            if (oldCoin) {
                newSummary += +newCoin.priceUsd * oldCoin.count;
            }
        }

        difference = newSummary - oldSummary;
        percents = (newSummary - oldSummary) / oldSummary || 0;
    }

    return { difference, percents };
}

export { usePortfolioCostDifferences };
