import React from 'react';

const Cart = ({ cart }) => {
    let total = 0;
    for(const monitor of cart){

    }
    return (
        <div>
            {
                cart.map(monitor => <Monitor monitor={monitor}></Monitor>)
            }
            
        </div>
    );
};
const Monitor = ({ monitor }) => {
    const { name, image, price } = monitor;
    return (
        <div>
            <div className='text-center flex'>
                <img className='text-center' width={100} src={image} alt="" />
                <div>
                    <h1>{name}</h1>
                    <h1>{price}</h1>
                </div>
            </div>
        </div>
    )
}
export default Cart;