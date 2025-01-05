import { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useLoaderData } from 'react-router-dom';
import Rating from "react-rating-stars-component";
import { Helmet } from 'react-helmet';

const AllBooks = () => {
    const books = useLoaderData();
    const categories = ["All", "Novel", "Thriller", "History", "Drama"];

    const [view, setView] = useState('card'); 
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);
    const filterBooks = (category) => {
        let filteredBooks = category === "All" ? books : books.filter((book) => book.category === category);

        if (showAvailableOnly) {
            filteredBooks = filteredBooks.filter((book) => book.quantity > 0);
        }

        return filteredBooks;
    };

    return (
        <div className="md:p-6">
            <Helmet>
                <title>Library Management | All Books </title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center mb-8">All Books</h1>
            <div className="flex justify-between mb-4">
                <div className="flex gap-4">
                    <select
                        className="select select-info w-40"
                        value={view}
                        onChange={(e) => setView(e.target.value)}
                    >
                        <option value="card">Card View</option>
                        <option value="table">Table View</option>
                    </select>
                </div>

                <button
                    onClick={() => setShowAvailableOnly((prev) => !prev)}
                    className="btn btn-secondary"
                >
                    {showAvailableOnly ? "Show All Books" : "Show Available Books"}
                </button>
            </div>

            <Tabs>
                <TabList className="flex flex-col md:flex-row justify-center gap-4 mb-6">
                    {categories.map((category, index) => (
                        <Tab
                            key={index}
                            className={`btn btn-info md:px-10`}
                        >
                            {category}
                        </Tab>
                    ))}
                </TabList>

                {categories.map((category, index) => (
                    <TabPanel key={index}>
                        {view === 'card' ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {filterBooks(category).length === 0 ? (
                                    <p className="text-gray-500 text-center md:pt-20 md:text-4xl col-span-full">
                                        No books available in this <span className='text-purple-600 font-bold'>{category}</span> category.
                                    </p>
                                ) : (
                                    filterBooks(category).map((book) => (
                                        <div key={book._id} className="card gap-3 bg-white shadow-md p-4 rounded-lg">
                                            <img
                                                src={book.image}
                                                alt={book.name}
                                                className="h-48 mx-auto rounded-lg"
                                            />
                                            <h3 className="text-2xl flex-1 font-bold text-gray-800">{book.name}</h3>
                                            <div className="text-xl flex-1 space-y-2">
                                                <p><strong>By: </strong>{book.author}</p>
                                                <p><strong>Category:</strong> {book.category}</p>
                                                <p><strong>Quantity:</strong> {book.quantity}</p>
                                                <div className="flex items-center mt-2">
                                                    <Rating value={book.rating} size={20} />
                                                    <span className="ml-2 text-sm text-gray-500">{book.rating}</span>
                                                </div>
                                                <p><small>Description: {book.description.slice(0, 50)}{book.description.length >= 80 && "..."}</small></p>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <Link
                                                    to={`/update-book/${book._id}`}
                                                    className="mt-3 btn btn-primary w-full"
                                                >
                                                    Update
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        ) : (
                            <table className="table-auto w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Book Name</th>
                                        <th className="px-4 py-2">Author</th>
                                        <th className="px-4 py-2">Category</th>
                                        <th className="px-4 py-2">Quantity</th>
                                        <th className="px-4 py-2">Rating</th>
                                        <th className="px-4 py-2">Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterBooks(category).length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="text-gray-500 text-center py-6">
                                                No books available in this <span className='text-purple-600 font-bold'>{category}</span> category.
                                            </td>
                                        </tr>
                                    ) : (
                                        filterBooks(category).map((book) => (
                                            <tr key={book._id}>
                                                <td className="px-4 py-2">{book.name}</td>
                                                <td className="px-4 py-2">{book.author}</td>
                                                <td className="px-4 py-2">{book.category}</td>
                                                <td className="px-4 py-2">{book.quantity}</td>
                                                <td className="px-4 py-2">
                                                    <Rating value={book.rating} size={20} />
                                                </td>
                                                <td className="px-4 py-2">
                                                    <Link
                                                        to={`/update-book/${book._id}`}
                                                        className="btn btn-primary"
                                                    >
                                                        Update
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        )}
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default AllBooks;
