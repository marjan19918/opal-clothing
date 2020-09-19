import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const publishableKey='pk_test_51HRZkWFHMXqeBe8Xbx219P2wetB0byreYLxkbtKxZWqA55k3DQITeU2h5ntDVKZ077yIHfU39s6SbFcZYZkUBT9b00t0cZQYfC';
    const priceForStripe=price*100;
    const ontoken=(token)=>{
        console.log(token);
        alert('Payment Successful')
        
    }
    return(
        <StripeCheckout 
        label='Pay Now'
        Name='Opal Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Noe'
        token={ontoken}
        stripeKey={publishableKey}
        />
    )

}
export default StripeCheckoutButton;