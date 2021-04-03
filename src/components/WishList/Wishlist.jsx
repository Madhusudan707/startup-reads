// import React,{useState,useEffect} from 'react'
import styles from './wishlist.module.css'
import Card from "../../components/Card/Card"
import { useWishList } from '../../contexts/wishlist'


const Wishlist = () => {
    const {wishListState} = useWishList()
    return (
        <>
          <div className={styles.wishlist_main}>
         {wishListState.wishes.length? <Card productsList={wishListState.wishes} />: <h1 className={styles.no_wishlist_msg}>Make A Wish</h1> }
          
           </div>
        </>
    )
}

export default Wishlist
