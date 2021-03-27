import React from 'react'
import styles from './Checkout.module.css'
import Form from '../Form/Form'
import Invoice from '../Invoice/Invoice'
const Checkout = () => {
    return (
        <div className={styles.checkout_main}>
            <Form headerText="Billing Address" pt1="FULL NAME" pt2="SHIPPING ADDRESS" pt3="CITY" pt4="COUNTRY" pt5="PINCODE" pt6="MOBILE NUMBER" btnText="CONTINUE TO PAYMENT"/>
            <Form headerText="Payment Information" pt1="CARD NUMBER" pt2="EXPIRY DATE" pt3="CVV" pt4="OTP" isDisplay="none" btnText="PROCEED TO PAY"/>
            <Invoice/>
        </div>
    )
}

export default Checkout
