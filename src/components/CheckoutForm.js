import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import ChargeService from '../services/charge-service';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async event => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.log('[error]', error);
        } else {
            try {
                const {id} = paymentMethod;
                ChargeService.charge(id,  1010).then((res) => {
                    console.log("paiememnt")
                    console.log(res)
                }, (error) => {
                    console.log(error);
                })

            } catch (err) {

            }
            console.log('[PaymentMethod]', paymentMethod);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <img src="https://www.vid-marketing.com/wp-content/uploads/2017/05/youtube-logo2.jpg" style={{ maxWidth: "400px" }} />
            <h2>Price : $16.33</h2>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    )
}

export default CheckoutForm
