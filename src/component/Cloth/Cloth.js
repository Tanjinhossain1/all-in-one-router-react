import React from 'react';
import { Link } from 'react-router-dom';

const Cloth = ({ cloth }) => {
    const { title, image, price, rating, id} = cloth;
    return (
        <div className='border-2 p-4 m-6 relative rounded-2xl'>
            <img width={200}  src={image} alt="" />
           <div className='mt-6 '>
           <h1>{title}</h1>
            <h4>Price: ${price}</h4>
            <h4>Rating: {rating.rate}</h4>
            <div className='mt-4 mb-12'>
            <Link className='border-2 p-2 w-100% absolute bottom-1 rounded-lg hover:text-white hover:bg-blue-500 hover:border-blue-800' to={`/clothDetail/${id}`}><button className=' hover:font-bold'>Details</button></Link>
            </div>
           </div>
        </div>
    );
};

export default Cloth;