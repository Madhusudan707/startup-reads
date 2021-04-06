import React from "react";
import { useSearchHandler } from "../../Hooks/Hooks";
import "./search.css";
const Search = () => {
  const { searchHandler } = useSearchHandler();
  return (
    <div className="search-main">
      <form className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Product Here &#x1F50D;"
          onChange={(e) => {
            searchHandler(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
