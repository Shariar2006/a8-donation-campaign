
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Page/Home/Home';
import Statistics from '../Page/Statistics/Statistics';
import Donation from '../Page/Donation/Donation';

const Router = createBrowserRouter([{

    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('../assingmentApi.json')
        },
        {
            path: "/donation",
            element: <Donation></Donation>
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>
        }
    ]

}])

export default Router;