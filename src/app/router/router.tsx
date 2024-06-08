import { createBrowserRouter } from 'react-router-dom';
import { CoinsPage, CoinPage, ErrorPage, Layout } from '../../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <CoinsPage />,
            },
            {
                path: '/coins',
                element: <CoinsPage />,
            },
            {
                path: '/coins/:id',
                element: <CoinPage />,
            },
        ],
    },
]);
