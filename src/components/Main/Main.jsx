import React from 'react'
import styles from '../Main/main.module.css'
import Sortproduct from '../SortProduct/SortProduct'
import Product from '../Product/Product'
import {useProducts} from  '../../contexts/contexts'

const Main = () => {
    const {setProductList} = useProducts()
    const sortHandler=(btnValue)=>{
  
        switch(btnValue){
          case "ascending":
            setProductList((productList)=>[...productList].sort((a, b) => parseFloat(a.price)-parseFloat(b.price)))  
           break;
          case "descending":
            console.log("dsc")
            setProductList((productList)=>[...productList].sort((a, b) => parseFloat(b.price)-parseFloat(a.price)))  
            break;
          default:
           //throw new Error()
           setProductList((productList)=>productList)
        }
      
      }
    return (
        <div className={styles.main}>
             <Sortproduct radioFunc={(e)=>{sortHandler(e.target.value)}}/>
             <Product/>
        </div>
    )
}

export default Main
