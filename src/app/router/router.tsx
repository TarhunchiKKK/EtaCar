import { createBrowserRouter } from 'react-router-dom';
import { CoinsPage, Layout } from '../../pages';
import { CoinPage } from '../../pages/CoinPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
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
