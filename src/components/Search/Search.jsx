import React from "react";
import axios from "axios"
import {useProducts} from '../../contexts/contexts'
import "./search.css";
const Search = () => {

  const {productsState,productsDispatch} = useProducts()

  const searchHandler = async (searchStr)=>{
    
    if(searchStr){
      const data = productsState.data.filter((product)=>{
        const response = product.title.toUpperCase().includes(searchStr.toUpperCase())
       if(response){
          return product
       }return null
      })
      productsDispatch({type:'OnSuccess',payload:data})
    }else{
      try{
        const response = await axios.get("data.json")
        productsDispatch({type:'reset',payload:response.data})
       
      }
      catch(err){
        productsDispatch({type:'OnFailure',payload:""})
      }
    }
    
  }
  return (
    <div className='search-main' >
      <form className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Product Here"
          onChange={(e)=>{searchHandler(e.target.value)}}
        />
        <a href="#!">
          <img
            className="search-icon"
            src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt='search'
          />
        </a>
      </form>
    </div>
  );
};

export default Search;
