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
import BookDetailsPage from "../Pages/BookDetailsPage";
import UpdateBookPage from "../Pages/UpdateBookPage";
import Error from "../Pages/Error";

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/all-books`)
            },
            {
                path: "/category/:category",
                element: <CategoryBooksPage />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/category/${params.category}`)
            },
            {
                path: "/book-details/:id",
                element: <PrivateRoute>
                    <BookDetailsPage />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/book-details/${params.id}`)
            },
            {
                path: "/update-book/:id",
                element: <UpdateBookPage />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/book-details/${params.id}`)
            },
            {
                path: "/all-books",
                element: <AllBooks />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/all-books`)
            },
            {
                path: "/add-book",
                element: <PrivateRoute>
                    <AddBook />
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
        element: <Register />
    }
]);

export default route;