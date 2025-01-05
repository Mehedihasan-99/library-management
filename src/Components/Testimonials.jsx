const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Jane Doe",
            feedback: "The library system is fantastic! Borrowing and returning books is so easy.",
            avatar: "https://via.placeholder.com/100",
        },
        {
            id: 2,
            name: "John Smith",
            feedback: "A great collection of books, and the recommendations are always spot on!",
            avatar: "https://via.placeholder.com/100",
        },
        {
            id: 3,
            name: "Emily Johnson",
            feedback: "I love the user-friendly interface. It makes finding books a breeze.",
            avatar: "https://via.placeholder.com/100",
        },
    ];

    return (
        <section className="my-8 bg-gray-100 py-6">
            <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg text-center"
                    >
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-700 mt-2">{testimonial.feedback}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
