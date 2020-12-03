import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { json } from 'body-parser';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hr5S5BjcqCIrEULrP533aR8EmB2amx2exA4XgaV3MHBHR4ngbTKREKYX3bAN0ox6y9Hqdo0o5BJHi08Z3vCgEmf00QZHV8YNz';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            alert('Payment Successful')
        }).catch(err => {
            console.log('Payment Error: ', JSON.parse(err));
            alert('There was an issue with your payment. Please make sure you use the provided credit card.');
        })
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='HW'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Total amount: ${price} €`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;