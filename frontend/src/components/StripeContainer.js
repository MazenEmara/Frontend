import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51L7q8gEFzZJ0Yadxfi4334IStWupeDUwE2prsmE6U0gqQQBhMNI2DOF87FznjqteYbzveymbjdt590X44Px1F1VW00yyFP3s2q"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}