import { useAppSelector } from '../app/store/store';
import { useGetCoinsQuery } from '../entities';
import { Loader } from '../shared';
import { CoinsTable } from '../widgets/CoinsTable/CoinsTable';

export function CoinsPage() {
    const { limit, searchedCoins, sortOrder } = useAppSelector(
        (state) => state.coinsFilters,
    );
    const { data: coins, isLoading, isFetching } = useGetCoinsQuery(limit);

    return (
        <>
            {coins && <CoinsTable coins={coins} />}
            {(isLoading || isFetching) && <Loader />}
        </>
    );
}
