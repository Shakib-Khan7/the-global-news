import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SingleNews from "../pages/News/SingleNews";
import PrivateRoute from "./PrivateRoute";
import Bookmark from "../pages/Bookmark/Bookmark";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path : '/newss/:id',
                element : <PrivateRoute><SingleNews></SingleNews></PrivateRoute>,
                loader : ()=>fetch('news.json')
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/bookmark',
                element: <PrivateRoute><Bookmark></Bookmark></PrivateRoute>
            },
        ]
    },
]);

export default routes;
