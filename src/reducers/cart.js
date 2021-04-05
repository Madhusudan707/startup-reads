export const initialState = {
  cartItem: [],
  error: "",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
        error: "",
      };

    case "AddToCartRepeated":
      return {
        cartItem: action.payload.product,
        error: "",
      };

    case "OnFailure":
      return {
        cartItem: [],
        error: "Unable to Load Cart, Try after sometime",
      };
    default:
      return state;
  }
};
