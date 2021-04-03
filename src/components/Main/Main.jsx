import React from 'react'
import Products from '../Products/Products'
import {useProducts} from '../../contexts/products'
import Sortproduct from "../SortProduct/SortProduct";
import './main.css'
const Main = () => {
    const {productsState,ProductsDispatch}=useProducts()
    const sortHandler = (btnValue) => {
      const resetSort = productsState.data;
        switch (btnValue) {
         
          case "ascending":
            const ascSort = [...productsState.data].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
              ProductsDispatch({type:"ascending",payload:ascSort})
            break;
          case "descending":
            const dscSort = [...productsState.data].sort( (a, b) => parseFloat(b.price) - parseFloat(a.price))
              ProductsDispatch({type:"descending",payload:dscSort})
            break;
          case "reset":
            ProductsDispatch({type:"OnSuccess",payload:resetSort})
            break;
          default:
            throw new Error();
        }
      };

      const filterHandler =(checkboxValue) => {
       
        switch(checkboxValue) {
          case 'in-stock':
            console.log(checkboxValue)
            const inStock = productsState.data.filter((item)=>item.stock===true)
            ProductsDispatch({type:"in-stock",payload:inStock})
            break;
          
          case 'fast-delivery':
            console.log(checkboxValue)
            const fastDelivery = productsState.data.filter((item)=>item.fastDelivery===true)
            ProductsDispatch({type:"fast-delivery",payload:fastDelivery})
            break;
          default:
            throw new Error();
        }

      }
    return (
        <div className="main">
             <Sortproduct
        radioFunc={(e) => {
          sortHandler(e.target.value);
        }}

        checkboxFunc={(e)=>{
          filterHandler(e.target.value)
        }}
      />
               <Products/>
        </div>
    )
}

export default Main
