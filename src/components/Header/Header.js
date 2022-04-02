import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-around p-4 bg-blue-800 text-white font-bold '>
           <div>
           <h1 className='text-4xl'>Pure_Shop</h1>
           </div>
           <div className=''>
               <Link className='mr-12 hover:text-orange-600' to={'/'}>Home</Link>
               <Link className='mr-12 hover:text-orange-600' to={'/monitors'}>Monitors</Link>
               <Link className='hover:text-orange-600' to={'/Cloths'}>Cloths</Link>
           </div>
        </div>
    );
};

export default Header;