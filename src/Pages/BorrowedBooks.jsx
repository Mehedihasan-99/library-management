import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import Loading from "../Components/Loading";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const BorrowedBooks = () => {
    const { user, error, setError } = useContext(AuthContext);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const email = user?.email;
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios(`${import.meta.env.VITE_API_URL}/borrowed-books?email=${email}`);
                const borrowedBooksData = response.data;
                // console.log(borrowedBooksData.length)

                const bookWithDetails = await Promise.all(
                    borrowedBooksData.map(async (borrowedBook) => {
                        const bookResponse = await axios(`${import.meta.env.VITE_API_URL}/book-details/${borrowedBook.bookId}`)
                        return { ...borrowedBook, bookDetails: bookResponse.data };
                    })
                );
                setBorrowedBooks(bookWithDetails);
            } catch (error) {
                setError(error)
                // console.log("Failed to fetch borrowed books.")
            }
            finally {
                setLoading(false)
            }
        };
        fetchBooks();
    }, [email]);

    const handleReturn = async (bookId) => {
        await axios.delete(`${import.meta.env.VITE_API_URL}/borrowed-books/${bookId}`);
        setBorrowedBooks(borrowedBooks.filter((book) => book._id !== bookId));
    };

    if (loading) {
        return <Loading />
    }

    if (error) {
        Swal.fire({
            title: { error },
            text: "Your Book borrowed successfully!",
            icon: "success"
        });
    }

    return (
        <div className="container mx-auto p-4">,
            <Helmet>
                <title>Library Management | Borrow Books </title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-6">Borrowed Books : {borrowedBooks.length}</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Cover</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Author Name</th>
                        <th className="border border-gray-300 px-4 py-2">Category</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                {borrowedBooks.length === 0 ? (
                    <p className="text-center text-gray-500 mt-4">No borrowed books found.</p>
                ) :
                    <tbody>
                        {borrowedBooks.map((book) => (
                            <tr key={book._id}>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img src={book.bookDetails.image} alt={book.bookDetails.title} className="w-16 h-20 object-cover" />
                                </td>
                                <td className="border border-gray-300 font-bold text-2xl px-4 py-2">{book.bookDetails.name}</td>
                                <td className="border text-xl font-bold border-gray-300 px-4 py-2">{book.bookDetails.author}</td>

                                <td className="border border-gray-300 px-4 py-2">{book.bookDetails.category}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleReturn(book._id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Return
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>}

            </table>
        </div>
    );
};

export default BorrowedBooks;