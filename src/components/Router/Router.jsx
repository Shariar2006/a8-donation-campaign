
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Page/Home/Home';
import Statistics from '../Page/Statistics/Statistics';
import Donation from '../Page/Donation/Donation';
import SingleCard from '../SingleCard/SingleCard';

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
        },
        {
            path: "/cards/:id",
            element: <SingleCard></SingleCard>,
            loader: () => fetch('../assingmentApi.json')
        }
    ]

}])

export default Router;