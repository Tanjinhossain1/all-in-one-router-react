import React, { useEffect, useState } from 'react';
import Countri from '../Countri/Countri';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const Spinner = () => <div className="loader"></div>;

    return (
        <div>
            <div className="pos-center">
                <div className={`${countries.length ===0 ? 'block' : 'nones'}`}>
                    <Spinner />
                </div>
            </div>
           <div className='grid lg:grid-cols-4'>
           {
                countries.map(countri => <Countri key={countri.name.common} countri={countri}></Countri>)
            }
           </div>
        </div>
    );
};

export default Countries;