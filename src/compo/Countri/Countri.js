import React from 'react';
import { useNavigate } from 'react-router-dom';


const Countri = ({ countri }) => {

    const { name, population, region, languages } = countri;
    const navigate = useNavigate()
    return (
        <div className='border-2 p-4 m-8 rounded-lg bg-pink-400 text-white font-semibold'>
            <h1>Name: {name.common}</h1>
            <h2>Population: {population}</h2>
            <h2>Region: {region}</h2>
            <h3>Languages: {languages?.spa}</h3>
            <div className='mt-4'>
                <button onClick={()=>navigate(`/countrieDetail/${name.common}`)} className='border-2 px-4 py-2 bg-white text-black font-bold hover:text-white hover:bg-pink-500 rounded-xl'><span className='hover:border-2 hover:p-1 hover:rounded-xl hover:text-black hover:bg-white '>Details</span></button>
            </div>
        </div>
    );
};

export default Countri;