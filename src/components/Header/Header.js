import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex items-center justify-around p-4 bg-blue-800 text-white font-bold '>
            <div>
                <h1 className='text-4xl'>Pure_Shop</h1>
            </div>
            <div className='md:flex text-center '>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-600 mr-12 hover:text-orange-600' : 'mr-12 hover:text-orange-600'} to={'/'}>Home</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-600 mr-12 hover:text-orange-600' : 'mr-12 hover:text-orange-600'} to={'/monitors'}>Monitors</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-600 mr-12 hover:text-orange-600' : 'mr-12 hover:text-orange-600'} to={'/cloths'}>Cloths</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-orange-600 mr-12 hover:text-orange-600' : 'mr-12 hover:text-orange-600'} to='/countries'>Countries</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;