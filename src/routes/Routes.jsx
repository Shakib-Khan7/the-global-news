import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SingleNews from "../pages/News/SingleNews";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/news/:id',
                element : <SingleNews></SingleNews>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    }
]);

export default routes;