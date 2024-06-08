import { RouterProvider } from 'react-router-dom';
import { router } from './app';
import { CoinsFilterBar } from './widgets';

function App() {
    // return <RouterProvider router={router} />;
    return <CoinsFilterBar />;
}

export default App;
