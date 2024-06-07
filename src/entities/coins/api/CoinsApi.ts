import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IResponse, SERVER_URL } from '../../../shared';
import { ICoin } from '../models';

export const coinsApi = createApi({
    reducerPath: 'coins/api',

    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URL}/assets`,
    }),

    tagTypes: ['Coin'],

    refetchOnFocus: true,

    endpoints: (builder) => ({
        getCoins: builder.query<ICoin[], number>({
            query: (limit: number = 20) => ({
                url: '',
                params: {
                    limit: limit,
                },
            }),
            transformResponse: (response: IResponse<ICoin[]>) => response.data,
            providesTags: ['Coin'],
        }),
    }),
});

export const { useGetCoinsQuery } = coinsApi;
