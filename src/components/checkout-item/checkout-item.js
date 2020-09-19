import React from 'react';
import './checkout-item.style.scss';
import {clearItem,removeItem,addItem} from '../../redux/cart/cart.action';

import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../redux/cart/cart.utils';

const CheckoutItem=({cartitem})=>{
    
    const {name,quantity,price,imageUrl}=cartitem
    const dispatch=useDispatch()
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name '>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>dispatch(removeItem(cartitem))} >&#10094;</div>
            <span className='value'>{quantity} </span>
                <div className='arrow' onClick={()=>dispatch(addItem(cartitem))}>&#10095;</div>
            </span>
            
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>dispatch(clearItem(cartitem))} >&#215;</div>
           
        </div>
    )
};
export default CheckoutItem