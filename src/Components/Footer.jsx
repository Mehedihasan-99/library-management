import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-8">
            <div className="mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
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

                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="link link-hover">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/all-books" className="link link-hover">
                                All Books
                            </a>
                        </li>
                        <li>
                            <a href="/add-book" className="link link-hover">
                                Add Book
                            </a>
                        </li>
                        <li>
                            <a href="/borrowed-books" className="link link-hover">
                                Borrowed Books
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <p>123 Library Street</p>
                    <p>Cityville, CV 12345</p>
                    <p>Email: support@libraryms.com</p>
                    <p>Phone: +123-456-7890</p>
                </div>

                {/* Social Media Section */}
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

            {/* Bottom Section */}
            <div className="bg-base-300 py-4">
                <p className="text-center text-sm">
                    © {new Date().getFullYear()} Library Management System All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
