import React,{useEffect,useState} from 'react'
// import styles from  './cardSmall.module.css'
import './cart.module.css'
import {useCart} from  '../../contexts/contexts'
import Counter from '../Counter/Counter'
const Cart = () => {
    const {itemsInCart,setItemsInCart} = useCart()
    const [final,setFinal]=useState(0)

    const removeItemFromCart=(isbn)=>{
        let newArr2=itemsInCart.filter((item)=>{
            if(item.isbn!==isbn){
                return item
            }
          })
          setItemsInCart(newArr2)
    }

    useEffect(()=>{
            finalBill()
    },[itemsInCart])

    const finalBill= ()=>{
       let price =  itemsInCart.reduce(function(acc, curr) {
        return acc + curr.qty * curr.price;
      },0);
      setFinal(price)
    }

    

    return (
        <>
        <div>
       
        <table style={{border:"2px solid black"}}>
                <thead>
                    <tr>
                        <th><h3>Final Price: ₹ {final}</h3></th>
                        <th> <a href='/checkout'><button style={{cursor:"pointer"}} className="btn btn-primary" >CHECKOUT</button></a></th>
                    </tr>
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRICE(₹)</th>
                        <th>QTY</th>
                        <th>TOTAL(₹)</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsInCart.map((product)=>{
                        return (
                            <tr key={product.isbn}>
                            <td>
                                    <p>{product.title}</p>
                                    <img src={product.image} alt="product" loading="lazy" width="50"/>
                            </td>
                            <td>{product.price}</td>
                            <td><Counter itemCount={product.qty} isbn={product.isbn}/>{/*{product.qty}*/}</td>
                            <td>{parseInt(product.price)*parseInt(product.qty)}</td>
                            <td><button className="btn btn-secondary" style={{cursor:"pointer"}} onClick={()=>{removeItemFromCart(product.isbn)}}>REMOVE</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
          
        </>
    )
}

export default Cart
