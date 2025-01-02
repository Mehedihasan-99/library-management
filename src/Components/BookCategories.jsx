import { Link } from "react-router-dom";

const BookCategories = () => {
    const categories = ["Novel", "Thriller", "History", "Drama"];

    return (
        <div className="book-categories mt-10 p-8 bg-gradient-to-br from-blue-100 to-purple-200 rounded-xl shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                Book Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 w-full">
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        to={`/category/${category}`}
                        className="btn btn-info"
                    >
                        {category}
                    </Link>))}
            </div>
        </div>
    );
};

export default BookCategories;
