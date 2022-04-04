import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div className='flex justify-center bg-cyan-600 text-white'>
                <Link to='/home' className=' ml-4 text-lg p-3 underline'>HOME</Link>
                <Link to='/reviews' className=' ml-4 text-lg p-3 underline'>REVIEWS</Link>
                <Link to='/dashbord' className=' ml-4 text-lg p-3 underline'>DASHBORD</Link>
                <Link to='/blogs' className=' ml-4 text-lg p-3 underline'>BLOGS</Link>
                <Link to='/about' className=' ml-4 text-lg p-3 underline'>ABOUT</Link>
            </div>
        </div>
    );
};

export default Header;
