import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-300 text-base-content mt-8">
            <div className="w-11/12 mx-auto py-10 flex flex-col lg:flex-row gap-8 lg:gap-32 items-center justify-center lg:justify-between">
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <img
                            src={`https://i.ibb.co/nMr6SHF/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA4-L3-Jhd3-Bpe-GVsb2-Zma-WNl-MV9jd-XRl-Xz-Nk-X2ls.jpg`}
                            alt=""
                            className='w-20'
                        />
                        <h2 className='text-2xl font-bold pl-4'>Library Management</h2>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row flex-1 justify-between gap-20'>
                    <div>
                        <h3 className="text-lg font-bold mb-1">Quick Links</h3>
                        <ul className="space-y-1">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/all-books">All Books</Link></li>
                            <li><Link to="/add-book">Add Book</Link></li>
                            <li><Link to="/borrowed-books">Borrowed Books</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">Contact Us</h3>
                        <p>Dhanmondi, Dhaka-1205</p>
                        <p>Bangladesh</p>
                        <p>Email: support@libraryms.com</p>
                        <p>Phone: +123-456-7890</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-outline text-primary"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-outline text-primary"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-outline text-primary"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-circle btn-outline text-primary"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-base-300 py-4">
                <p className="text-center text-sm">
                    © {new Date().getFullYear()} Library Management System All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
