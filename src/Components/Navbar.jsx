import { Link, NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

    const links = <div className="flex flex-col lg:flex-row *:text-xs gap-2 lg:gap-5 text-gray-700">
        <NavLink to="/" className='hover:text-blue-600'>Home</NavLink>
        <NavLink to="/all-books" className='hover:text-blue-600'>All Books</NavLink>
        <NavLink to="/add-book" className='hover:text-blue-600'>Add Book</NavLink>
        <NavLink to="/borrowed-books" className='hover:text-blue-600'>Borrowed Books</NavLink>
    </div>;


    return (
        <div className='bg-slate-300'>
            <div className="navbar justify-between md:w-11/12 mx-auto">
                <div className="nav-start space-x-2">
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
                        <img src={`https://i.ibb.co/nMr6SHF/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA4-L3-Jhd3-Bpe-GVsb2-Zma-WNl-MV9jd-XRl-Xz-Nk-X2ls.jpg`}
                            alt=""
                            className='size-8' />
                    </NavLink>
                    <h2 className='text-2xl font-bold'>Library Management</h2>
                </div>
                <div className="nav-center hidden lg:flex">
                    <ul className=" px-1">
                        {links}
                    </ul>
                </div>
                <div className="nav-end gap-10">
                    <div className='space-x-2'>
                        <button className="btn btn-primary btn-sm text-white">
                            <Link to="/login"> Login </Link>
                        </button>
                        <button className="btn btn-primary btn-sm text-white">
                            <Link to="/register"> Register </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
