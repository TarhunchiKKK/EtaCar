import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse, API_URL } from '../../../shared';
import { ICoin, ICoinsSearchOptions } from '../types';

export const coinsApi = createApi({
    reducerPath: 'coins/api',

    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}/assets`,
    }),

    tagTypes: ['Coin'],

    refetchOnFocus: true,

    endpoints: (builder) => ({
        getCoins: builder.query<ICoin[], ICoinsSearchOptions>({
            query: (options: ICoinsSearchOptions) => ({
                url: '',
                params: {
                    limit: options.limit,
                    offset: options.offset,
                },
            }),
            transformResponse: (response: IResponse<ICoin[]>) => response.data,
            providesTags: ['Coin'],
        }),
    }),
});

export const { useGetCoinsQuery } = coinsApi;
