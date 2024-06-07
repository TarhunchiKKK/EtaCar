import { useGetCoinsQuery } from '../entities';

export function CoinsPage() {
    const { data: coins, isLoading, isFetching } = useGetCoinsQuery(20);
    return <></>;
}
