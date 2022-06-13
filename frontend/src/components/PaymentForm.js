import { CardElement, useElements, useStripe, } from "@stripe/react-stripe-js"
import OrderDataService from "../services/rabbit";
import axios from "axios"
import React, { useState, useEffect } from 'react'
import Cart from "./CartComponent"

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    
    const [prices, setprices] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: (prices[prices.length-1].props.Price)*100,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}


useEffect(() => {
  retrievePrice();
}, [])

const retrievePrice = () => {
    OrderDataService.getAll()
      .then(response => {
        //console.log(response.data);
        setprices(response.data.map((Pr)=><totalPrice Price={Pr.totalPrice}/>))
        return prices
      })
      .catch(e => {
        console.log(e);
      });
  };

    return (
        <>
        {!success ? 
        <div className="wrapper">
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button style={{ color: '#ffffff' }} align="center">Checkout</button>
        </form>
        </div>
        : 
            <h2 style={{ color: '#004b07' }} align="center">Payment Successful Thank You!</h2>
        }
            
        </>
    )
}