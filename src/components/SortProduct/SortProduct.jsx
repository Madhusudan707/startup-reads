import React from "react";
import "./sortProduct.css";

const Sortproduct = ({ radioFunc,checkboxFunc }) => {
  return (
    <div className="sort_products">
      <h3>
        PRICE &nbsp;
        <label>
          <input
            type="radio"
            name="sort"
            value="ascending"
            onClick={radioFunc}
          />
          LOW TO HIGH &nbsp;
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="descending"
            onClick={radioFunc}
          />
          HIGH TO LOW
        </label>
        {/* <Link to={HOME}>HOME</Link> */}
        <label>
         &nbsp;<button value='reset' className='btn-clear btn-default'  onClick={radioFunc}>Reset</button>
        </label>
      </h3>
      <h3>
        FILTER &nbsp;
        <label>
          <input type='checkbox' onClick={checkboxFunc} value='in-stock'/> &nbsp;
          IN-STOCK
        </label>
        &nbsp; &nbsp;
        <label>
          <input type='checkbox' onClick={checkboxFunc} value='fast-delivery'/> &nbsp;
          FAST-DELIVERY
        </label>
      </h3>
      
    </div>
  );
};

export default Sortproduct;
