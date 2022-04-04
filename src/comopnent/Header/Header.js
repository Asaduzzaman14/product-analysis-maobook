import React from 'react';
import CustomeLink from '../CustomeLink/CustomeLink';
import './Header.css'

const Header = () => {
    return (
        <div >
            <div className='header flex justify-center  text-white'>
                <CustomeLink to='/home' className=' ml-4 text-sm p-3 underline'>HOME</CustomeLink>
                <CustomeLink to='/reviews' className=' ml-4 text-sm p-3 underline'>REVIEWS</CustomeLink>
                <CustomeLink to='/dashbord' className=' ml-4 text-sm p-3 underline'>DASHBORD</CustomeLink>
                <CustomeLink to='/blogs' className=' ml-4 text-sm p-3 underline'>BLOGS</CustomeLink>
                <CustomeLink to='/about' className=' ml-4 text-sm p-3 underline'>ABOUT</CustomeLink>
            </div>
        </div>
    );
};

export default Header;
