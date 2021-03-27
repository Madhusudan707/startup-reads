import React from 'react'
import styles from './Invoice.module.css'
const Invoice = () => {
    return (
        <div className={styles.invoice_main}>
            <h2>Invoice</h2>
            <hr/>
            <br/>
                <p>Shipping/Customer Address </p>
                <p>MADHUSUDAN DAS</p>
                <p>H.NO - 200, ADDRESS</p> 
                <p>JAMSHEDPUR - 831011</p>
                <p>Jharkhand</p>               
        </div>
    )
}

export default Invoice
