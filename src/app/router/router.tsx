import { createBrowserRouter } from 'react-router-dom';
import { CoinsPage, Layout } from '../../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <CoinsPage />,
            },
        ],
    },
]);
