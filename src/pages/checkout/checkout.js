import React from 'react';
import './checkout.styles.scss';
import {useSelector} from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOut=()=>{
    const total=useSelector(state=>state.cart.cartItems.
        reduce((accumalateQuantity,cartItems)=>accumalateQuantity+cartItems.quantity*cartItems.price,0));

    const cartitems=useSelector(state=>state.cart.cartItems)

    return(
        <div className='checkout-page'>
            <div className="checkout-header">
                
            <div className='header-block'>
                    <span>product</span>
                </div>
                <div className='header-block'>
                    <span>discription</span>
                </div>
                <div className='header-block'>
                    <span>quantity</span>
                </div>
                <div className='header-block'>
                    <span>price</span>
                </div>
                <div className='header-block'>
                    <span>remove</span>
                </div>
            </div>
            {cartitems.map(cartitem=><CheckoutItem key={cartitem.id} cartitem={cartitem}/>)}
            <div className='total'>
                <span>total price is{total}$</span>

            </div>
            <StripeCheckoutButton price={total}/>

        </div>
    )
}
export default CheckOut;