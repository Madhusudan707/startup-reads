// import React,{useState,useEffect} from 'react'
import Card from '../Card/Card'
import styles from './product.module.css'
import {useProducts} from '../../contexts/contexts'
const Product = () => {

    const{productList}= useProducts()
    return (
            <div className={styles.product_main}>
                <Card products={productList}/>
            </div>

    )
}

export default Product
