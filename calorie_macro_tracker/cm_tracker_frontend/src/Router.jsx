import {createHashRouter} from 'react-router-dom';
import { SearchRecipe } from './pages/SearchRecipe';
import { HomePage } from './pages/HomePage';
import { RecordMeal } from './pages/RecordMeal';
import { LoginPage } from './pages/LoginPage';
import { CalendarPage } from './pages/CalendarPage';
import App from './App';
import { SignUp } from './pages/SignUp';


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
                path: '/signup/',
                element: <SignUp />,
            },
            {
                path: '/search/',
                element: <SearchRecipe />,
            },
            {
                path: '/recordmeal/',
                element: <RecordMeal />,
            },
            {
                path: '/calendar/',
                element: <CalendarPage />,
            }
        ]
    }
]);

export default Router;
