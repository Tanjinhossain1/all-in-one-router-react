import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
   
    let total = 0;
    for(const monitor of cart){
        total = total + +monitor.price;
    }
    return (
        <div>
            {
                cart.map(monitor => <Monitor key={monitor.id} monitor={monitor}></Monitor>)
            }
            <h4>Total Price: ${total}</h4>
            {cart.length > 0 && <Link to='/proceedCart'><button>Proceed</button></Link>}
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
                    <h1>Price: ${price}</h1>
                </div>
            </div>
        </div>
    )
   
}

export default Cart;