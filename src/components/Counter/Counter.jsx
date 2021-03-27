import React,{useState} from 'react'
import Button from '../Button/Button'
import {useCart} from  '../../contexts/contexts'
// import styles from './counter.module.css'

const Counter = ({itemCount,isbn}) => {
    const [count,setCount]=useState(itemCount)
    const [btnDisable,setBtnDisable]=useState(false)
    const {itemsInCart,setItemsInCart}=useCart()
   const counterHandler=(incDec)=>{
  
      let newArr= itemsInCart.map((item)=>{
        if(item.isbn===isbn){
            switch(incDec){
                case '+':
                    setCount(count+1)
                    return {...item,qty:item.qty+1}
    
                case '-':
                    if(count>1){
                        setCount(count-1)
                        return {...item,qty:item.qty-1}
                    }if(count===1){
                       
                        setBtnDisable(true)
                       
                    }
                    break;
                    
                default:
                    throw new Error("custom error")
            }
          
        }return item
      })
      setItemsInCart((newArr))
  }
    return (
        <div>
            <Button text="+" btnClass="btn btn-default"  btnFunc={()=>{counterHandler("+")}} />
            
            <span>{count}</span>
            <Button isDisabled={btnDisable} btnClass="btn btn-default" text="-" btnFunc={()=>{
                counterHandler("-")
                
                }} />
            
        </div>
    )
}

export default Counter
