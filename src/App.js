import React,{useSelector} from 'react';
import HomePage from './pages/homepage/Homepage';
import'./App.css';
import { Switch, Router,Route,Redirect } from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component.jsx";
import CheckOut from './pages/checkout/checkout';
import Header from './components/header/header.component';
import SingnInandSignOut from './pages/sign-in&sign-out/sign-in&sign-out';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscibFromAuth=null;
  componentDidMount(){
    const {setCurrentUser}=this.props
      
   this.unsubscibFormAuth= auth.onAuthStateChanged(async (userAuth)=>{
       
       if (userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot=>{
        setCurrentUser({
          id:snapshot.id,
          ...snapshot.data()
        });
      });
      
       }
       setCurrentUser(userAuth);
       }
      )
      
  }
  componentWillUnmount(){
    this.unsubscibFormAuth();
  }


  render(){
    return (
      <div className="App">
        <Header />
        
        <Switch>
          <Route exact component={HomePage} path='/'/>
          <Route  path='/shop' component={ShopPage}/> 
          <Route exact path='/checkout' component={CheckOut}/>
          <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>) :(<SingnInandSignOut/>)}/>
          </Switch>
       
      </div>
    );
  }
  
}
const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser : user =>dispatch(setCurrentUser(user))

})


export default connect(mapStateToProps,mapDispatchToProps)(App);

