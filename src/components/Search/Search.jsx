import React from "react";
import styles from "./search.module.css";
const Search = ({ inputFunc }) => {
  return (
    <div className={styles.search}>
      <label>
        <input type="text" placeholder="Search Books" onChange={inputFunc} />
      </label>
    </div>
  );
};

export default Search;
