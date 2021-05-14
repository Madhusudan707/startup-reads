export const initialState = {
  cartItem: [],
  error: "",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
        error: "",
      };

    case "ADD_TO_CART_REPEATED":
      return {
        cartItem: action.payload.product,
        error: "",
      };

    case "ON-FAILURE":
      return {
        cartItem: [],
        error: "Unable to Load Cart, Try after sometime",
      };
    default:
      return state;
  }
};
