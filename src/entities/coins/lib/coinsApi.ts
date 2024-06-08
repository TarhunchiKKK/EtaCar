import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse, API_URL } from '../../../shared';
import { ICoin, ICoinsSearchOptions } from '../types';

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
        getCoins: builder.query<ICoin[], ICoinsSearchOptions>({
            query: (options: ICoinsSearchOptions) => ({
                url: '',
                params: {
                    limit: options.limit,
                    offset: options.offset,
                },
            }),
            transformResponse: (response: IResponse<ICoin[]>) => response.data,
        }),
    }),
});

export const { useGetCoinsQuery, useGetCoinsCountQuery } = coinsApi;
