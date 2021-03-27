import React from 'react'
import styles from './sortProduct.module.css'
// import Button from '../Button/Button'

const Sortproduct = ({radioFunc}) => {
    // const clearFilter=()=>{
       
    // }
    return (
        <div className={styles.sort_products}>
            <h3>
                PRICE
                    <label>
                        <input type="radio" name="sort" value="ascending"  onClick={radioFunc} /> LOW TO HIGH
                    </label>
                    <label>
                    <input type="radio" name="sort" value="descending" onClick={radioFunc} /> HIGH TO LOW
                </label>
            </h3>
            {/* <Button text='CLEAR FILTER' btnFunc={clearFilter} btnClass="btn btn-default"  /> */}
           
        </div>
    )
}

export default Sortproduct
