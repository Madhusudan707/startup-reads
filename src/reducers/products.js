export const initialState = {
  data: [],
  loading: true,
  error: "",
};

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "ON-SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "ON-FAILURE":
      return {
        loading: false,
        data: [],
        error: "Unable to Load Products, Try after sometime",
      };

    case "ASCENDING":
      return {
        loading: false,
        data: action.payload,
      };
    case "DESCENDING":
      return {
        loading: false,
        data: action.payload,
      };

    case "IN-STOCK":
      return {
        loading: false,
        data: action.payload,
      };

    case "FAST-DELIVERY":
      return {
        loading: false,
        data: action.payload,
      };
    case "RESET":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };

    default:
      return state;
  }
};
