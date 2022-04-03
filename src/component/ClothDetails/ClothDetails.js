import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ClothDetails = () => {

    const [cloth, setCloth] = useState([]);
    const { clothId } = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${+clothId}`)
            .then(res => res.json())
            .then(json => setCloth(json))
    }, [clothId])
    const { title, image, price, rating, description } = cloth;
    return (
        <div className='flex justify-center mt-12'>
            <div className='border-4 p-4 w-2/4'>
                <img width={500} src={image} alt="" />
                <div>
                    <h1 className='text-3xl'>Name: {title}</h1>
                    <h4 className='text-xl'>Price: ${price}</h4>
                    <h4 className='text-xl'>rate: ${rating?.rate}</h4>

                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ClothDetails;