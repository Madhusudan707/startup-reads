import React from "react";
import Card from "../Card/Card";
import {useFetchData} from '../../Hooks/Hooks'
import "./products.css";

const Products = () => {
  const {productsState} = useFetchData()

  return (
    <div className="products">
      <Card productsList={productsState.data } />
    </div>
  );
};

export default Products;
