import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BannerSlider = () => {
    return (
        <div>
            <Swiper
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ 
                    delay: 5000, 
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-11/12 md:w-full mx-auto h-80 rounded-lg overflow-hidden"
            >
                <SwiperSlide
                    className="flex flex-row justify-center items-center bg-cover bg-center text-white text-center "
                    style={{
                        backgroundImage: "url('https://i.ibb.co/YkjzBBC/young-student-learning-library.jpg')",
                    }}>
                    <h2 className="text-2xl md:text-4xl font-bold text-center px-4  rounded-lg">
                        Welcome to Our Library
                    </h2>
                    <p className="px-4 text-center py-2 rounded-lg">
                        Discover a vast collection of books to enrich your knowledge.
                    </p>
                </SwiperSlide>
                <SwiperSlide className="flex  bg-blue-500 text-white "
                    style={{
                        backgroundImage: "url('https://i.ibb.co/YkjzBBC/young-student-learning-library.jpg')",
                    }}
                >
                    {/* <img
                        src="https://i.ibb.co/YkjzBBC/young-student-learning-library.jpg"
                        alt=""
                        className="w-full object-cover"
                    /> */}
                    <div className="absolute">
                        <h2 className="text-2xl md:text-4xl font-bold">Welcome to Our Library</h2>
                        <p className="text-center mt-4 px-4">
                            Discover a vast collection of books and digital resources to enrich your knowledge.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col items-center justify-center bg-green-500 text-white h-64">
                    <img
                        src="https://i.ibb.co/tXtHKGj/student-boy-with-book.jpg"
                        alt=""
                        className="" />
                    <h2 className="text-2xl md:text-4xl font-bold">Achieve Your Dreams</h2>
                    <p className="text-center mt-4 px-4">
                        Master the art of communication in another language and unlock career and travel opportunities.
                    </p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col items-center justify-center bg-purple-500 text-white h-64">
                    <img
                        src="https://www.vecteezy.com/vector-art/2294883-digital-library-web-banner-design-students-reading-book-on-online-library-web-online-education-digital-classroom-e-learning-concept-header-or-footer-banner"
                        alt="" />
                    <h2 className="text-2xl md:text-4xl font-bold">Interactive Learning</h2>
                    <p className="text-center mt-4 px-4">
                        Engage with fun and interactive tools designed to help you retain vocabulary and language skills.
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
