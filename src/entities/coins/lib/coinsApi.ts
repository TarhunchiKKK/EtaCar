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
        getCoinsCount: builder.query<number, void>({
            query: () => ({
                url: '',
                params: {
                    limit: 2000,
                },
            }),
            transformResponse: (response: IResponse<ICoin[]>) => response.data.length,
        }),
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
        getOneCoin: builder.query<ICoin, string>({
            query: (id: string) => ({
                url: `/${id}`,
            }),
            transformResponse: (response: IResponse<ICoin>) => response.data,
        }),
    }),
});

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
                        params: {
                            interval: argument.interval,
                            start: argument.start,
                            end: argument.end,
                        },
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

export const { useGetCoinsQuery, useGetCoinsCountQuery, useGetOneCoinQuery } = coinsApi;
