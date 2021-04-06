import Counter from "../../components/Counter/Counter";
import "./cart.css";
import { useRemoveItemFromCart, useFinalBill } from "../../Hooks/Hooks";

const Cart = () => {
  const { removeItemFromCart } = useRemoveItemFromCart();
  const { final, cartState } = useFinalBill();

  return (
    <div>
      {cartState.cartItem.length ? (
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
            {cartState.cartItem.map((product) => (
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
            ))}
          </tbody>
        </table>
      ) : (
        <p className="empty_cart">Add Something to the Cart</p>
      )}
    </div>
  );
};

export default Cart;
