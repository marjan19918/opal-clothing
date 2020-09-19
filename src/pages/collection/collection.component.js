import React from 'react';
import './collection.style.scss';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item';
import { useParams } from 'react-router-dom';

const CollectionPage=()=>{
     const {collectionid}=useParams();
     let collections=useSelector((state)=>state.shop.collections[collectionid]);
      const {title,items}=collections
    return(
      <div className='collection-page'>
          <h1 className='title'>{title}</h1>
         <div className='items'>
             {items.map(item=><CollectionItem id={item.id} item={item}/>)}
         </div> 
      </div>
    )
}
export default CollectionPage;
