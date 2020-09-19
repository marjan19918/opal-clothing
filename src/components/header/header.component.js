import React from "react";
// import './header.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/header.crwn.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.jsx';
import {connect} from 'react-redux';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import {HeaderContainer,LogoContainer,OptionLink,Optionscontaner} from './headerstyledcomponent';

const Header=({currentUser,hidden})=>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'></Logo>
        </LogoContainer>
        <Optionscontaner>
            <OptionLink to='/shop'>shop</OptionLink>
            <OptionLink to='/shop'>contact</OptionLink>
        </Optionscontaner>
        {
            currentUser ?
            <OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
            :
            <OptionLink to ='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon/>
        {
            hidden ? null : <CartDropDown/>
        }
        

    </HeaderContainer>
)
const mapStateToprops=({user:{currentUser},cart:{hidden}})=>({
    currentUser,
    hidden
})
export default connect(mapStateToprops)(Header);