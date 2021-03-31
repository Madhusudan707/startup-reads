import React from "react";
import styles from "./sortProduct.module.css";
const Sortproduct = ({ radioFunc }) => {
  return (
    <div className={styles.sort_products}>
      <h3>
        PRICE &nbsp;
        <label>
          <input
            type="radio"
            name="sort"
            value="ascending"
            onClick={radioFunc}
          />{" "}
          LOW TO HIGH &nbsp;
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="descending"
            onClick={radioFunc}
          />{" "}
          HIGH TO LOW
        </label>
      </h3>
    </div>
  );
};

export default Sortproduct;
