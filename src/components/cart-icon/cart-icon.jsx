import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/cart-icon.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {useSelector} from 'react-redux';

import './cart-icon.style.scss';

const CartIcon=({toggleCartHidden})=>{
    const itemcount=useSelector(state=>state.cart.cartItems.
        reduce((accumalateQuantity,cartItems)=>accumalateQuantity+cartItems.quantity,0))
    return(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemcount}</span>
    </div>
    )
}
 const mapdispatchToProps=(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
 });
 
export default connect(null,mapdispatchToProps)( CartIcon);