import { NavLink } from 'react-router-dom';

const Error = () => {

    return (
        <div className='pt-32'>
            <div className="flex flex-col items-center gap-5 border rounded-xl w-1/3 mx-auto p-10 bg-slate-100">
                <h1 className='text-6xl font-bold text-red-300'>Oops!</h1>
                <h2 className='text-4xl font-bold'>404</h2>
                <p className='text-xl text-black font-semibold'>Page Not Found</p>
                <button className='bg-purple-600 p-2 py-1 rounded-2xl text-white font-bold'><NavLink to="/" >Go To Home</NavLink></button>
            </div>
        </div>
    );
};

export default Error;