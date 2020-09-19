import React from 'react';
import CostomButtom from '../costom-buttom/costom-buttom.component';
import {withRouter} from 'react-router-dom'
// import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import {useSelector,useDispatch} from 'react-redux';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item';


const CartDropDown=({history,hidden})=>{
    
    const dispatch=useDispatch();
     const cartItems=useSelector((state)=>state.cart.cartItems)
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartitem=><CartItem key={cartitem.id} item={cartitem}/>)
            ) : <span className='empty-message'>Your cart is empty.</span>
            }
        </div>
        <CostomButtom onClick={()=>{history.push('/checkout');dispatch(toggleCartHidden(hidden))}}>GO TO CHECKOUT</CostomButtom>
        
    </div>
    )
        };
        export default withRouter(CartDropDown);
// const mapStateToProps=({cart:{cartItems}})=>({
//     cartItems
// })
// export default connect(mapStateToProps) (CartDropDown);