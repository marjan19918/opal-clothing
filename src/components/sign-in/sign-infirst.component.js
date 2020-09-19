import React, { useState } from 'react';
import './sign-in.style.scss';



function SignInFirst(){
   const [email,setEmail]=useState("");
   const  [password,setPassword]=useState("");
 //const Submitmail=(e)=>(setEmail(e.target.value) console.log(email) )
//    const SubmitPassword=(e)=>(setPassword(e.target.value))

return(
    <div className='sign-in'>

        <h2>I already have an acount</h2>
        <span>sign in with email</span>
        <form >
            <input value={email} type='email' name='email' required 
            onChange={(e)=>{setEmail(e.target.value) ;console.log(email)}}></input>
            <label>email</label>
            <input value={password} type='password' name='password' required 
            onChange={(e)=>{setPassword(e.target.value) ;console.log(password)}}></input>
            <label>password</label>
            
            <button type='submit' onSubmit={(e)=>e.preventDefault}>submit</button>
        </form>

    </div>
)

}
export default SignInFirst;