import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JGK7hGTlphSK8w6MORMFXmD61WjOTXJuSeBs4p8xbnmpE7hDeRpWy98N5dnH6KhLjeteBNwVe5YVIMRTw0C3o2p00wggkKGzW');

function Payment() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default Payment
