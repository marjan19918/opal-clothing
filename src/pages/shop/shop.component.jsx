import React from 'react';
import './shop.style.scss';
import {Route,useRouteMatch, Switch} from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { useEffect } from 'react';
import { firestore,converSanpshotToMap } from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { useState } from 'react';

const ShopPage =()=>{
     let {path}=useRouteMatch();
     const [isloading,setIsloading]=useState(true);
     const CollectionOverviewWithSpinner=WithSpinner(CollectionOverview);
     const CollectionPageWithSpinner=WithSpinner(CollectionPage)
     
   const unSubscibeFromSanpshot=null;
   const dispatch=useDispatch()
   useEffect(()=>{
       const collectionRef=firestore.collection('collection')
       collectionRef.onSnapshot(async snapshot=>{console.log(snapshot);
       const collectionMap =converSanpshotToMap(snapshot);
       dispatch(updateCollections(collectionMap))
       setIsloading(false)
    })
   },[])
        return(
            <div className='shop-page'>
                <Switch>
                 {/* < Route exact path={`${match.path}`} component={CollectionOverview}/> 
                      <Route path={`${match.path}/:hi`}><CollectionPage/></Route>   */}
              < Route exact path={path} render={(props)=><CollectionOverviewWithSpinner isloading={isloading} {...props}/>}/>
                <Route path={`${path}/:collectionid`} render={(props)=><CollectionPageWithSpinner isloading={isloading} {...props}/>}></Route>   
             </Switch>
            </div>
        )
}
export default ShopPage;