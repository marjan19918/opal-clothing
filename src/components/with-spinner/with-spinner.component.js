import React from 'react'
import {SpinnerOverlay,SpinnerContainer} from './with-spinner.styles';

const WithSpinner=WrappedComponent=>{
    const spinner=({isloading,...otherprops})=>{
        return isloading ? 
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
        :( <WrappedComponent/>);
       

    }
    return spinner
}
export default WithSpinner;