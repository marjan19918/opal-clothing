import React from 'react';

import formInput from '../form-input/form-input';
import CostomButtom from '../costom-buttom/costom-buttom.component'

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.style.scss'
import FormInput from '../form-input/form-input';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName :'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= async (event)=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        try{
            const {user} =await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user,{displayName});
           this.state={
            displayName :'',
            email:'',
            password:'',
            confirmPassword:''
        };

        }catch(error){
            console.error(error)

        }
    }
    handleChange=e=>{
        const {name,value}=e.target;
        this.setState({[name]:value})


    }
    render(){
        const {displayName,email,password,confirmPassword}=this.state
        return(
            <div className='sign-up'>
                <h2 className='title'> I have an acount</h2>
                <span>sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                   
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='display name'
                    required
                    />

                    
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='email'
                    required
                    />

                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={this.handleChange}
                    label='password'
                    required
                    />

                    
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label='confirm password'
                    required
                    />

                    <CostomButtom type='submit'>SIGN UP</CostomButtom>

                </form>

            </div>
        )
    }
}
export default SignUp;