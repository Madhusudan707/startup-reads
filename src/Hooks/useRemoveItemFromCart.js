import { useCart } from "../contexts/contexts";

export const useRemoveItemFromCart = () => {
  const { cartState, cartDispatch } = useCart();

  const removeItemFromCart = ({isbn}) => {
    let newArr2 = cartState.cartItem.filter((item) => item.isbn !== isbn);
    cartDispatch({ type: "AddToCartRepeated", payload: { product: newArr2 } });
  };

  return { removeItemFromCart };
};
