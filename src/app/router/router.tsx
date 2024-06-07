import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../../pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [],
    },
]);
