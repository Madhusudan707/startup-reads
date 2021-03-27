// import React,{useState,useEffect} from 'react'
import styles from './wishlist.module.css'
import Card from "../../components/Card/Card"
import { useWishList } from '../../contexts/contexts'


const Wishlist = () => {

    const {itemsInWishList} = useWishList()
   
   
    return (
        <>
        {/* <img  src={isLoading && "https://cdn.dribbble.com/users/31776/screenshots/754788/loading_cart.gif"} className={styles.loading}/> */}
          <div className={styles.wishlist_main}>
           <Card products={itemsInWishList} /> 
           </div>
        </>
    )
}

export default Wishlist
