import React, { useEffect, useState } from 'react';
import Cloth from '../Cloth/Cloth';

const Cloths = () => {
    const [cloths, setCloths] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setCloths(data))
    }, [])
    const Spinner = () => <div className="loader"></div>;

    return (
        <div>
            <div className="pos-center">
                <div className={`${cloths.length === 0 ? 'block' : 'nones'}`}>
                    <Spinner />
                </div>
            </div>
            <div className='grid lg:grid-cols-5'>
                {
                    cloths.map(cloth => <Cloth key={cloth.id} cloth={cloth}></Cloth>)
                }
            </div>
        </div>
    );
};

export default Cloths;