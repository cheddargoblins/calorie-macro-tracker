import {createHashRouter} from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import { HomePage } from './pages/HomePage';
import { RecordMealPage } from './pages/RecordMealPage';
import { LoginPage } from './pages/LoginPage';
import { CalendarPage } from './pages/CalendarPage';
import App from './App';


const Router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/login/',
                element: <LoginPage />,
            },
            {
                path: '/search/',
                element: <SearchPage />,
            },
            {
                path: '/recordmeal/',
                element: <RecordMealPage />,
            },
            {
                path: '/calendar/',
                element: <CalendarPage />,
            }
        ]
    }
]);

export default Router;
