import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddBook = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const newBook = {
        image: "",
        name: "",
        author: "",
        category: "Novel",
        quantity: 0,
        rating: 0,
        description: "",
        owner: user?.email,
    }
    const [formData, setFormData] = useState(newBook);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await axios.post(`${import.meta.env.VITE_API_URL}/add-book`, formData)
        if (result.data.insertedId) {
            Swal.fire({
                title: "Success !!",
                text: "Your book added Successfully!",
                icon: "success"
            });
        }
        setFormData(newBook)
        navigate('/')
    };

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Library Management | Add Book</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center bg-base-200 mb-4">Add a Book</h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Book Cover Image URL :
                        </label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Book Name :
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Author Name :
                        </label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Category :
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option>Novel</option>
                            <option>Thriller</option>
                            <option>History</option>
                            <option>Drama</option>
                        </select>
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Quantity :
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Rating (1-5) :
                        </label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            value={formData.rating}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="col-span-2 mb-5">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Description :
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="2"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBook;