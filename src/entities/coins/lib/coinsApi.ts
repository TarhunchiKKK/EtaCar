import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse, API_URL } from '../../../shared';
import { formatTime } from '../../../shared/helpers/formatTime';
import { CoinHistoryPeriod, ICoin, ICoinHistory } from '../types';
import { CoinHistoryQueryArgument, IGetCoinsQueryArgument } from './types';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const coinsApi = createApi({
    reducerPath: 'coins/api',

    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}/assets`,
    }),

    refetchOnFocus: true,

    endpoints: (builder) => ({
        getCoins: builder.query<ICoin[], IGetCoinsQueryArgument>({
            query: (options: IGetCoinsQueryArgument) => ({
                url: '',
                params: {
                    limit: options.limit,
                    offset: options.offset,
                },
            }),
            transformResponse: (response: IResponse<ICoin[]>) => response.data,
        }),

        /* The server used does not provide an endpoint for determining the number of coins (necessary for pagination). 
        Therefore, the number of coins is determined in this way. */
        getCoinsCount: builder.query<number, void>({
            query: () => ({
                url: '',
                params: {
                    limit: 2000,
                },
            }),
            transformResponse: (response: IResponse<ICoin[]>) => response.data.length,
        }),
        getOneCoin: builder.query<ICoin, string>({
            query: (id: string) => ({
                url: `/${id}`,
            }),
            transformResponse: (response: IResponse<ICoin>) => response.data,
        }),
        getCoinsByIds: builder.query<ICoin[], string[]>({
            query: (ids: string[]) => ({
                url: '',
                params: {
                    ids: ids.join(','),
                },
            }),
            transformResponse: (response: IResponse<ICoin[]>) => response.data,
        }),
        getPopularCoins: builder.query<ICoin[], void>({
            query: () => ({
                url: '',
                params: {
                    limit: 3,
                },
            }),
            transformResponse: (response: IResponse<ICoin[]>) => response.data,
        }),
    }),
});

/* From this endpoint comes a non-serializable object that breaks the store. 
Therefore, the axios is used for this query. */
export function useGetCoinHistoryQuery(coinId: string, period: CoinHistoryPeriod) {
    const [coinHistory, setCoinHistory] = useState<ICoinHistory[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        async function fetchHistory() {
            try {
                setIsLoading(true);
                setIsError(false);

                const argument: CoinHistoryQueryArgument = new CoinHistoryQueryArgument(coinId, period);
                const response = await axios.get<IResponse<{ priceUsd: string; time: number }[]>>(
                    `${API_URL}/assets/${argument.id}/history`,
                    {
                        params: argument.params,
                    },
                );
                setCoinHistory(response.data.data.map((h) => ({ ...h, time: formatTime(new Date(h.time)) })));

                setIsLoading(false);
            } catch (_) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchHistory();
    }, [coinId, period]);

    return { coinHistory, isLoading, isError };
}

export const {
    useGetCoinsQuery,
    useGetCoinsCountQuery,
    useGetOneCoinQuery,
    useGetPopularCoinsQuery,
    useGetCoinsByIdsQuery,
} = coinsApi;
