import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MainLayout from "../Layout/MainLayout";

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
    }
]);

export default route;