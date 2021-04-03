import React, { useEffect, useState } from "react";
import Counter from '../../components/Counter/Counter'
import styles from  "./cart.module.css";
import { useCart } from "../../contexts/cart"
const Cart = () => {
  const { cartState, CartDispatch } = useCart();
  const [final, setFinal] = useState(0);

  const removeItemFromCart = (isbn) => {
    let newArr2 = cartState.cartItem.filter((item) => item.isbn!==isbn)
    CartDispatch({type:"AddToCartRepeated",payload:{product:newArr2}})
  };

  useEffect(() => {
    const finalBill = () => {
      let price = cartState.cartItem.reduce((acc, curr)=> acc + curr.qty * curr.price, 0);
      setFinal(price);
    };
    finalBill()
  },[cartState]);

  
  return (
      <div>{cartState.cartItem.length ?
        <table style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>
                <h3>Final Price: ₹ {final}</h3>
              </th>
              <th>
                {" "}
                <a href="/checkout">
                  <button
                    style={{ cursor: "pointer" }}
                    className="btn btn-primary"
                  >
                    CHECKOUT
                  </button>
                </a>
              </th>
            </tr>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE(₹)</th>
              <th>QTY</th>
              <th>TOTAL(₹)</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {cartState.cartItem.map((product) => {
              return (
                <tr key={product.isbn}>
                  <td>
                    <p>{product.title}</p>
                    <img
                      src={product.image}
                      alt="product"
                      loading="lazy"
                      width="50"
                    />
                  </td>
                  <td>{product.price}</td>
                  <td>
                    <Counter itemCount={product.qty} isbn={product.isbn} />
                   
                  </td>
                  <td>{parseInt(product.price) * parseInt(product.qty)}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        removeItemFromCart(product.isbn);
                      }}
                    >
                      REMOVE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> 
        : <p className={styles.empty_cart}>Add Something to the Cart</p>}
      </div>
  );
};

export default Cart;
