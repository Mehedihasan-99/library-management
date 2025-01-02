import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Regestration";
import AllBooks from "../Pages/AllBooks";
import AddBook from "../Pages/AddBook";
import CategoryBooksPage from "../Pages/CategoryBooksPage "
import BorrowedBooks from "../Pages/BorrowedBooks";
import PrivateRoute from "./PrivateRoute";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        error: <h2>Error</h2>,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/all-books`)
            },
            {
                path:"/category/:category",
                element: <CategoryBooksPage />,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/category/${params.category}`)
            },
            {
                path: "/all-books",
                element: <AllBooks />
            },
            {
                path: "/add-book",
                element: <PrivateRoute>
                    <AddBook/>
                </PrivateRoute>
            },
            {
                path: "/borrowed-books",
                element: <BorrowedBooks />
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