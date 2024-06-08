import { RouterProvider } from 'react-router-dom';
import { router } from './app';
import { CoinHistoryChart } from './widgets';
import { CoinPage } from './pages/CoinPage';

function App() {
    // return <RouterProvider router={router} />;
    return <CoinPage />;
}

export default App;
