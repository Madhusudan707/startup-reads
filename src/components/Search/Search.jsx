import React from "react";
import "./search.css";
const Search = () => {
  return (
    <div className='search-main' >
      <form className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Product Here"
        />
        <a href="#">
          <img
            className="search-icon"
            src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
          />
        </a>
      </form>
    </div>
  );
};

export default Search;
