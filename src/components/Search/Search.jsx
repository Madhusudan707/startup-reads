import React from "react";
import {useProducts} from '../../contexts/contexts'
import "./search.css";
const Search = () => {

  const {productsState,ProductsDispatch} = useProducts

  const searchHandler = (searchStr)=>{
    console.log(searchStr);
    // const searchResult = productsState.data.title.toUpperCase().includes(searchStr.toUpperCase())
    // console.log(searchResult)
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
