// import React,{useState,useEffect} from 'react'
import Card from '../Card/Card'
import styles from './product.module.css'
import {useProducts} from '../../contexts/contexts'
const Product = () => {

    const{productList}= useProducts()
    // console.log({productList})
   
    // useEffect(()=>{
    //     productLoading()
    // },[])

    // const[products,setProduct] = useState([])

    //     const productLoading=async ()=>{
    //             const response = await axios.get('data.json')
    //             console.log(response.data)

    //             setProduct(response.data)
    //     }    

    return (
        <>
            <div className={styles.product_main}>

                <Card products={productList}/>

            </div>
        </>
    )
}

export default Product
