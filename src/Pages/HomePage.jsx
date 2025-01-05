import { Helmet } from "react-helmet";
import BannerSlider from "../Components/BannerSlider";
import BookCategories from "../Components/BookCategories";
import EventsAndWorkshops from "../Components/Event";
import Testimonials from "../Components/Testimonials";

const HomePage = () => {

    return (
        <div>
            <Helmet>
                <title>Library Management | Home</title>
            </Helmet>
            <BannerSlider />
            <BookCategories />
            <Testimonials />
            <EventsAndWorkshops />
        </div>
    );
};

export default HomePage;