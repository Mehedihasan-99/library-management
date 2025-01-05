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
                {/* slide 1  */}
                <SwiperSlide
                    className="relative text-white text-center"
                >
                    <img src={'https://i.ibb.co/YkjzBBC/young-student-learning-library.jpg'} alt="" />
                    <div className="absolute top-0 flex flex-col items-center justify-center w-full bg-black bg-opacity-50 h-full ">
                        <h2 className="text-2xl md:text-4xl font-bold text-center px-4  rounded-lg">
                            Welcome to Our Library
                        </h2>
                        <p className="px-4 text-center py-2 rounded-lg">
                            Discover a vast collection of books to enrich your knowledge.
                        </p>
                    </div>
                </SwiperSlide>
                {/* slide 2  */}
                <SwiperSlide
                    className="relative text-white text-center"
                >
                    <img src={'https://i.ibb.co/tXtHKGj/student-boy-with-book.jpg'} alt="" />
                    <div className="absolute top-0 flex flex-col items-center justify-center w-full bg-black bg-opacity-50 h-full ">
                        <h2 className="text-2xl md:text-4xl font-bold text-center px-4  rounded-lg">
                            Expand Your Knowledge
                        </h2>
                        <p className="px-4 text-center py-2 rounded-lg">
                            From thrillers to novel, history to drama books that inspire you.
                        </p>
                    </div>
                </SwiperSlide>
                {/* slide 3  */}
                <SwiperSlide
                    className="relative text-white text-center"
                >
                    <img src={'https://i.ibb.co.com/34PxTbV/Screenshot-2024-12-28-070937.jpg'} 
                    alt=""
                    className="w-full" />
                    <div className="absolute top-0 flex flex-col items-center justify-center w-full bg-black bg-opacity-50 h-full ">
                        <h2 className="text-2xl md:text-4xl font-bold text-center px-4  rounded-lg">
                            Borrow Books With Ease
                        </h2>
                        <p className="px-4 text-center py-2 rounded-lg">
                            Seamlessly borrow and manage books from our digital library.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;
