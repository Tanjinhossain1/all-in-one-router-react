import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Monitors = () => {
    const [monitors, setMonitors] = useState([]);
    const [cart, setCart] = useState([]);
    const monitorCount = (items) => {
        const existItems = cart.find(monitor => monitor.id === items.id)
        if (!existItems) {
            const newCart = [...cart, items];
            setCart(newCart)
        }
    }
    useEffect(() => {
        fetch('monitors.json')
            .then(res => res.json())
            .then(data => setMonitors(data))
    }, [])

    return (
        <div className=''>
            <div className='flex justify-center mt-6'>
                <Cart cart={cart}></Cart>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                    monitors.map(monitor => <Monitor monitorCount={monitorCount} monitor={monitor} key={monitor.id}></Monitor>)
                }
            </div>
        </div>
    );
};
const Monitor = ({ monitor, monitorCount }) => {
    const { name, image, price } = monitor;
    return (
        <div className='border-2 m-12 rounded-lg p-6 relative'>
            <img src={image} alt="" />
            <h3 title={name} className='text-3xl'>Name: {name.length > 17 ? name.slice(0, 17) : name}</h3>
            <h5 className='mb-12 text-xl'>price: {price}</h5>
            <button onClick={() => monitorCount(monitor)} className='border-4 bg-slate-200 hover:text-white hover:bg-blue-600 hover:border-blue-900 font-semibold p-4  rounded-xl absolute bottom-1 '>Add To Cart</button>
        </div>
    )
}

export default Monitors;