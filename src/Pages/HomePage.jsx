import BannerSlider from "../Components/BannerSlider";


const HomePage = () => {
    return (
        <div className="w-full border">
            <BannerSlider />
            <h2 className='text-red-600'>Home Page</h2>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

        </div>
    );
};

export default HomePage;