import axios from 'axios';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBookComponent = () => {
    const loaderBook = useLoaderData();
    const [book, setBook] = useState(loaderBook);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/update-book/${book._id}`, book, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                Swal.fire({
                    title: "Success !!",
                    text: "Book updated successfully!",
                    icon: "success"
                });
                navigate('/all-books');
            } else {
                Swal.fire({
                    title: "Error !!",
                    text: 'Failed to update book',
                    icon: "Error"
                });
            }
        } catch (err) {
            console.log(err.response?.data?.message || 'An error occurred while updating the book');
        }
    };


    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded shadow-md">
            <Helmet>
                <title>Library Management | Update Book</title>
            </Helmet>
            <h2 className="text-xl font-bold mb-4">Update Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Book Title:</label>
                    <input
                        type="text"
                        name="name"
                        value={book.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Author Name:</label>
                    <input
                        type="text"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Category:</label>
                    <select
                        name="category"
                        value={book.category}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="Novel">Novel</option>
                        <option value="Thriller">Thriller</option>
                        <option value="History">History</option>
                        <option value="Drama">Drama</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Rating:</label>
                    <input
                        type="number"
                        name="rating"
                        value={book.rating}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Cover Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={book.image}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default UpdateBookComponent;
