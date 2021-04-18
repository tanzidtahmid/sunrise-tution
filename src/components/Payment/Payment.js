import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SipmleCardForm';
const stripePromise = loadStripe('pk_test_51Ie1yQAB3MxYj7vRiy7ITK44VjhCPkyvcvL0w34tGLsIG7EHEbKOmwVuZPtmy1dtuhafaCtOF0dasKnADjVARd2O004kSwUaXY');

const Payment = (props) => {
    console.log(props.singleService)
    return (

        <Elements stripe={stripePromise}>

            {/* <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <MyCheckoutForm /> */}




            <SplitCardForm singleService = {props.singleService}></SplitCardForm>
        </Elements>

    );
};

export default Payment;