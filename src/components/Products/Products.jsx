import React,{useEffect} from "react";
import axios from 'axios'
import Card from "../Card/Card";
import "./products.css";
import { useProducts } from "../../contexts/contexts";
const Products = () => {
  const { productsState,ProductsDispatch} = useProducts();

  useEffect(()=>{
    const fetchData=async ()=>{ 
        try{
          const response = await axios.get("data.json")
          ProductsDispatch({type:'OnSuccess',payload:response.data})
        }
        catch(err){
          ProductsDispatch({type:'OnFailure',payload:""})
        }
    }
    fetchData()
  },[])

  return (
    <div className="products">
      <Card productsList={productsState.data } />
    </div>
  );
};

export default Products;
