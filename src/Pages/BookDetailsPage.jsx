import { useState, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import Rating from "react-rating-stars-component";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const BookDetailsPage = () => {
    const loadBook = useLoaderData()
    const { user } = useContext(AuthContext)
    const [book, setBook] = useState(loadBook);
    const [isModalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate()
    const email = user?.email;

    const handleBorrow = async (returnDate) => {
        try {
            const borrowData = {
                bookId: book._id,
                userId: user.uid,
                name: user.displayName,
                email: user.email,
                returnDate,
            };
            await axios.post(`${import.meta.env.VITE_API_URL}/add-borrow-book`, borrowData);

            setBook((prev) => ({ ...prev, quantity: prev.quantity - 1 }));

            Swal.fire({
                title: "Success !!",
                text: "Your Book borrowed successfully!",
                icon: "success"
            });

            setModalOpen(false);
            navigate("/borrowed-books")
        } catch {
            Swal.fire({
                title: "Something Wrong !!",
                text: "Failed to borrow the book.",
                icon: "Error"
            });
        }
    };

    const handleModal = async () => {
        try {
            const borrowedBooksResponse = await axios.get(`${import.meta.env.VITE_API_URL}/borrowed-books?email=${email}`);
            const alreadyBorrowed = borrowedBooksResponse.data.some(borrowedBook => borrowedBook.bookId === book._id);

            if (alreadyBorrowed) {
                Swal.fire({
                    title: "Already Borrowed !!",
                    text: "You have already borrowed this book.",
                    icon: "warning",
                });
                return;
            }

            setModalOpen(true);
        } catch (error) {
            console.error("Error fetching borrowed books:", error);
            Swal.fire({
                title: "Error !!",
                text: "Something went wrong while checking borrowed books.",
                icon: "error",
            });
        }
    };

    return (
        <div className="p-8 bg-gray-50">
            <Helmet>
                <title>Library Management | Book Details</title>
            </Helmet>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-5  bg-white shadow-md p-2 md:p-6 rounded-lg max-w-3xl mx-auto">
                <img
                    src={book.image}
                    alt={book.name}
                    className=" h-40 md:h-full object-cover rounded-lg"
                />
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mt-6">{book.name}</h2>
                    <p className="text-gray-600 mt-2"><strong>Author :</strong> {book.author}</p>
                    <p className="text-gray-600 mt-2"><strong> Category :</strong> {book.category}</p>
                    <p className="text-gray-600 mt-2"> <strong>Available Quantity :</strong> {book.quantity}</p>
                    <div className="flex items-center gap-4">
                        <strong className="text-gray-600">Rating :</strong>
                        <Rating value={book.rating} size={20} />
                    </div>
                    <p className="text-gray-600 mt-4"><strong> Description :</strong> <small>{book.description}</small></p>

                    <button
                        onClick={handleModal}
                        className="btn btn-primary mt-6 font-bold text-2xl"
                        disabled={book.quantity <= 0}
                    >
                        {book.quantity > 0 ? "Borrow" : "Out of Stock"}
                    </button>
                </div>
            </div>

            {/* Borrow Modal */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Borrow Book</h3>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const returnDate = e.target.returnDate.value;
                                handleBorrow(returnDate);
                            }}
                        >
                            <div className="form-control">
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    value={user?.displayName || ""}
                                    readOnly
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-2">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    value={user?.email || ""}
                                    readOnly
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-2">
                                <label className="label">Return Date</label>
                                <input
                                    type="date"
                                    name="returnDate"
                                    required
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="modal-action">
                                <button type="submit" className="btn btn-primary">
                                    Confirm
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="btn"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetailsPage;
