import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render(){
        return(
            //this Stripe Checkout component is an external component from react-stripe-checkout 
            <StripeCheckout           
                name= "Emaily"
                description = "5$ for 5 email credits"
                amount={500}
                //in cents by default
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                //callback function to be called when we get a token received from Stripe
            >
            <button className='btn'>Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);
