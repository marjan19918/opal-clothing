import React from 'react';
import './collection-item.style.scss';
import CostomButtom from '../costom-buttom/costom-buttom.component';
import {connect, useDispatch} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';

const CollectionItem=({item})=>{
    const dispatch=useDispatch();
    const {name,imageUrl,price}=item
    return(
    <div className='collection-item'>
        <div className='image' style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CostomButtom inverted className='custom-button'
        // onClick={()=>addItem(item)}
        onClick={()=>dispatch(addItem(item))}
        >ADD TO CART</CostomButtom>
    </div>)

    };
    // const mapdispatchtoprops =(dispatch)=>({
    //     addItem:item=>dispatch(addItem(item))

    // })
   
export default CollectionItem
// connect(null,mapdispatchtoprops)( CollectionItem);