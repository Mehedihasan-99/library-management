
const EventsAndWorkshops = () => {
    const events = [
        {
            id: "1",
            title: "Book Launch: Burning Earth",
            date: "January 15, 2025",
            description: "Join us for an exclusive book launch event featuring discussions with the author and a chance to win free copies.",
            image: "https://i.ibb.co.com/NmpY7nh/images.jpg"
        },
        {
            id: "2",
            title: "Creative Writing Workshop",
            date: "January 20, 2025",
            description: "Learn the art of storytelling from renowned authors. This workshop will cover techniques, exercises, and more.",
            image: "https://i.ibb.co.com/5k58wyK/images-1.jpg"
        },
        {
            id: "3",
            title: "Library Tour: Discover the Archives",
            date: "February 5, 2025",
            description: "Take a guided tour of our library's archives and learn about rare collections and historical treasures.",
            image: "https://i.ibb.co.com/Mn85Gvx/images-2.jpg"
        },
        {
            id: "4",
            title: "Author Meet & Greet",
            date: "June 21, 2025",
            description: "Meet your favorite authors and get your books signed. An opportunity to engage with literary icons.",
            image: "https://i.ibb.co.com/q73fb1J/https-cdn-evbuc-com-images-808718499-2136703482703-1-original.jpg"
        }
    ];

    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-12 px-6 rounded-lg shadow-lg text-white my-12">
            <h2 className="text-4xl font-bold text-center mb-8">📅 Upcoming Events & Workshops</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white flex flex-col text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="h-40 mx-auto object-cover rounded mb-4"
                        />
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                            <p className="text-gray-600 italic mb-2">{event.date}</p>
                            <p className="text-gray-700 line-clamp-3">{event.description}</p>
                        </div>
                        <div className="text-center">
                            <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsAndWorkshops;
