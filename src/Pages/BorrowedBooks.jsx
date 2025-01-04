import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import Loading from "../Components/Loading";

const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const email = user?.email;
    console.log(borrowedBooks)
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios(`${import.meta.env.VITE_API_URL}/borrowed-books?email=${email}`);
                const borrowedBooksData = response.data;
                console.log(borrowedBooksData)

                // For each borrowed book, fetch the details for book details
                const bookWithDetails = await Promise.all(
                    borrowedBooksData.map(async (borrowedBook) => {
                        const bookResponse = await axios(`${import.meta.env.VITE_API_URL}/book-details/${borrowedBook.bookId}`)
                        return { ...borrowedBook, bookDetails: bookResponse.data };
                    })
                );
                setBorrowedBooks(bookWithDetails);
            } catch {
                console.log("Failed to fetch borrowed books.")
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

    if ( loading ) {
        return <Loading />
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Borrowed Books : {borrowedBooks.length}</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Cover</th>
                        <th className="border border-gray-300 px-4 py-2">Title</th>
                        <th className="border border-gray-300 px-4 py-2">Category</th>
                        <th className="border border-gray-300 px-4 py-2"> Quantity</th>
                        <th className="border border-gray-300 px-4 py-2">Return Date</th>
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
                                <td className="border border-gray-300 px-4 py-2">{book.bookDetails.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{book.bookDetails.category}</td>
                                <td className="border border-gray-300 px-4 py-2">{book.bookDetails.quantity}</td>
                                <td className="border border-gray-300 px-4 py-2">{book.returnDate}</td>
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