import React from "react";
import "./sortProduct.css";

const Sortproduct = ({ radioFunc, checkboxFunc }) => {
  return (
    <div className="sort_products">
      <h3>
        <span>PRICE</span>
        <label>
          <input
            type="radio"
            name="sort"
            value="ascending"
            onClick={radioFunc}
          />
          <span>LOW TO HIGH</span>
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="descending"
            onClick={radioFunc}
          />
          <span>HIGHT TO LOW</span>
        </label>
        <label>
          <button
            value="reset"
            className="btn-clear btn-default"
            onClick={radioFunc}
          >
            Reset
          </button>
        </label>
      </h3>
      <h3>
        FILTER
        <label>
          <input type="checkbox" onClick={checkboxFunc} value="in-stock" />{" "}
          IN-STOCK
        </label>
        
        <label>
          <input type="checkbox" onClick={checkboxFunc} value="fast-delivery" />{" "}
         FAST-DELIVERY
        </label>
      </h3>
    </div>
  );
};

export default Sortproduct;
