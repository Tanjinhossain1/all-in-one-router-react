import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountriDetail = () => {
    const {countrieName} = useParams();
   
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countrieName}`)
        .then(res => res.json())
        .then(data => setCountries(data[0]))
    }, [countrieName])
    const { name, population, region,flags,area,status,timezones } = countries;

    return (
        <div className='flex justify-center mt-12 '>
            <div className=''>
            <img src={flags?.png} alt="" />
            <h1 className='text-4xl'>Name: {name?.common}</h1>
            <h1 className='text-2xl'>Population: {population}</h1>
            <h2 className='text-2xl'>Region: {region}</h2>
            <h3 className='text-2xl'>Area: {area}</h3>
            <h3 className='text-2xl'>Status: {status}</h3>
            <h3 className='text-2xl'> Timezones: {timezones}</h3>
            {/* <h1 className='underline text-blue-500'><a target="_blank" rel="noreferrer" href={maps?.googleMaps}>GoogleMaps: {maps.googleMaps}</a></h1> */}
        </div>
        </div>
    );
};

export default CountriDetail;