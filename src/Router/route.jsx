import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Regestration";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        error: <h2>Error</h2>,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register/>
    }
]);

export default route;