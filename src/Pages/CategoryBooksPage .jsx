import { useParams, Link, useLoaderData } from "react-router-dom";
import Rating from "react-rating-stars-component";

const CategoryBooksPage = () => {
  const { category } = useParams();
  const books = useLoaderData()

  return (
    <div className="p-4 md:p-8 bg-gray-50">
      <h2 className="text-xl md:text-4xl font-semibold text-gray-800 mb-8">
        Books in <span className="text-purple-500 font-bold"> {category} </span> Category :
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} className="card bg-white shadow-md p-4 rounded-lg">
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-3">{book.name}</h3>
              <p className="text-gray-600">By: {book.author}</p>
              <p className="text-gray-500">Quantity: {book.quantity}</p>
              <div className="flex items-center mt-2">
                <Rating key={book._id} value={book.rating} size={20} />
                <span className="ml-2 text-sm text-gray-500">{book.rating}</span>
              </div>
              <Link
                to={`/book-details/${book._id}`}
                className="mt-3 btn btn-primary w-full"
              >
                Details
              </Link>
            </div>
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBooksPage;
