import React from 'react';
import './costom-buttom.style.scss';

const CostomButtom=({children,isGoogleSignIn,inverted,...otherprops})=>(
    <button
     className={`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ' '} custom-button `}
     {...otherprops}>
        {children}

    </button>
)


export default CostomButtom;