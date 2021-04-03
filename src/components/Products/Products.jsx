import React from 'react'
import Card from '../Card/Card'
import './products.css'
import {useProducts} from '../../contexts/products'
const Products = () => {
    const{productsState}= useProducts()
    return (
       
            <div className="products">
                <Card productsList={productsState.data}/>
            </div>

    )
}

export default Products
