import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
 
    const links = <div className="flex flex-col lg:flex-row *:text-xl gap- lg:gap-10 text-gray-700">
        <NavLink to="/" className='hover:text-blue-600'>Home</NavLink>
        <NavLink to="/all-books" className='hover:text-blue-600'>All Books</NavLink>
        <NavLink to="/add-book" className='hover:text-blue-600'>Add Book</NavLink>
        <NavLink to="/borrowed-books" className='hover:text-blue-600'>Borrowed Books</NavLink>
    </div>;

    const handleLogout = () => {
        logout();
        navigate("/")
    }


    return (
        <div className='bg-slate-300'>
            <div className="navbar justify-between md:w-11/12 mx-auto">
                <div className="nav-start space-x-1 md:space-x-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" text-2xl lg:hidden">
                            <IoMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/">
                        <img
                            src={`https://i.ibb.co/nMr6SHF/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA4-L3-Jhd3-Bpe-GVsb2-Zma-WNl-MV9jd-XRl-Xz-Nk-X2ls.jpg`}
                            alt=""
                            className='size-8 md:size-10 rounded-full' />
                    </NavLink>
                    <h2 className='text-xs md:text-2xl font-bold'>Library Management</h2>
                </div>
                <div className="nav-center hidden lg:flex">
                    <ul className=" px-1">
                        {links}
                    </ul>
                </div>
                <div className="nav-end gap-10">
                {
                        user ? <div className='relative group'>
                            <img
                                alt="user photo"
                                src={ user?.photo || user?.photoURL}
                                className='w-10 rounded-full cursor-pointer' />
                            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className='text-xs md:text-xl'>{user?.name || user?.displayName || user.email}</p>
                                <button onClick={handleLogout} className="btn btn-primary btn-sm text-white">Logout
                                </button>
                            </div>
                        </div> :
                            <div className='space-x-1 md:space-x-2'>
                                <button className="btn p-1 md:p-2 btn-primary btn-sm text-white">
                                    <Link to="/login"> Login </Link>
                                </button>
                                <button className="btn p-1 md:p-2 btn-primary btn-sm text-white">
                                    <Link to="/register"> Register </Link>
                                </button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
