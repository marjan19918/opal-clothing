import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input';
import CostomButtom from '../costom-buttom/costom-buttom.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }

    }
    handleSubmit=async e=>{e.preventDefault();
        const {email,password}=this.state;
        try{await auth.signInWithEmailAndPassword(email,password)
            this.setState({email:'',password:''})
        }catch(error){console.log(error)

            }
        
    }
         handlechange=(event)=>{
                 const {value,name}=event.target;
                this.setState({[name]:value});
                 
             }
    render(){
        return(
            <div className='sign-in' >

        <h2 className='title'>I already have an acount</h2>
        <span className='title'>sign in with email</span>
        <form onSubmit={this.handleSubmit}>

            <FormInput value={this.state.email} type='email' 
            name='email' label='email' required 
            handlechange={this.handlechange}></FormInput>

            

            <FormInput value={this.state.password} type='password'
             name='password' label='password' required 
            handlechange={this.handlechange}></FormInput>

            <div className='buttons'>
            
            <CostomButtom type='submit' >sign in</CostomButtom>
            <CostomButtom onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CostomButtom>
            </div>
        </form>

    </div>
        )
    }

}
export default SignIn;