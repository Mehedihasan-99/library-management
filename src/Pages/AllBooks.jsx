import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Rating from "react-rating-stars-component";

const AllBooks = () => {
    const books = useLoaderData();
    const navigate = useNavigate();

    const categories = ["All", "Novel", "Thriller", "History", "Drama"];


    const filterBooks = (category) => {
        if (category === "All") {
            return books;
        }
        return books.filter((book) => book.category === category);
    };

    return (
        <div className="md:p-6">
            <h1 className="text-3xl font-bold text-center mb-8">All Books</h1>
            <Tabs>
                <TabList className="flex flex-col md:flex-row justify-center gap-4 mb-6">
                    {categories.map((category, index) => (
                        <Tab
                            key={index}
                            className={`btn btn-info md:px-10`}
                        >
                            {`${category}`}
                        </Tab>
                    ))}
                </TabList>
                {categories.map((category, index) => (
                    <TabPanel key={index}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {filterBooks(category).length === 0 ? (
                                <p className="text-gray-500 text-center md:pt-20 md:text-4xl col-span-full">
                                    No books available in this <span className='text-purple-600 font-bold'> {category}</span> category.
                                </p>
                            ) : (
                                filterBooks(category).map((book) => (

                                    <div key={book._id} className="card gap-5 bg-white shadow-md p-4 rounded-lg">
                                        <img
                                            src={book.image}
                                            alt={book.name}
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                        <div className='text-xl space-y-2'>
                                            <h3 className="text-2xl font-bold text-gray-800 mt-3">{book.name}</h3>
                                            <p><strong>By : </strong>{book.author}</p>
                                            <p><strong>Category :</strong> {book.category}</p>
                                            <p><strong>Quantity :</strong> {book.quantity}</p>
                                            <div className="flex items-center mt-2">
                                                <Rating value={book.rating} size={20} />
                                                <span className="ml-2 text-sm text-gray-500">{book.rating}</span>
                                            </div>
                                            <p><small>Discription :  {book.description.slice(0, 50)} {book.description.length >= 80 && "..."} </small></p>
                                            <div className="card-actions justify-end">
                                                <Link
                                                    to={`/update-book/${book._id}`}
                                                    className="mt-3 btn btn-primary w-full"
                                                >
                                                    Update
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
            
        </div>
    );
};

export default AllBooks;


{/* <div
    key={book._id || book.id}
    className="card w-full bg-base-100 shadow-xl"
>
    <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Rating: {book.rating} / 5</p>
        <div className="card-actions justify-end">
            <button
                className="btn btn-primary"
                onClick={() => handleUpdate(book._id || book.id)}
            >
                Update
            </button>
        </div>
    </div>
</div> */}