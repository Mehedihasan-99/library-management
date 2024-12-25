import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {

    return (
        <div className="relative">
            <header className="sticky  top-0 z-50">
                <Navbar />
            </header>
            <main className="min-h-[calc(100vh-442px)] w-11/12 mx-auto my-5 lg:my-10">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;