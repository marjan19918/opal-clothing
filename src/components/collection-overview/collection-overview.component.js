import React, { useEffect } from 'react';
import './collection-overview.scss';
import { useSelector } from 'react-redux';
import PreviewCollection from '../preview-collection/preview-collection.component'
import {addCollectionAndDocments} from '../../firebase/firebase.utils'

const CollectionOverview=()=>{
    const collections=useSelector((state)=>state.shop.collections);
   
    // {collections ? const coll=Object.keys(collections).map(key=>collections[key]) :const coll=[]}


   
     const coll=collections ? Object.keys(collections).map(key=>collections[key]) :[]
   
   
    const collectionArray=useSelector((state)=>state.shop)

    // useEffect(()=>{addCollectionAndDocments('collection',coll.map(({items,title})=>({items,title})))},[])
    return(
         <div className='collections-overview'>
             {
                  coll.map(({id,...othercollectionprops})=>(
                    <PreviewCollection key={id} {...othercollectionprops}/>
                ))
              }
         </div>  
    )
}
export default CollectionOverview;