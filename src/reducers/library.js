export const initialState = {
  data: [],
  loading: true,
  error: "",
};

export const libraryReducer = (state, action) => {
  switch (action.type) {
    case "ON_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "ON_FAILURE":
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

    case "IN_STOCK":
      return {
        loading: false,
        data: action.payload,
      };

    case "FAST_DELIVERY":
      return {
        loading: false,
        data: action.payload,
      };

    case "PRODUCT_PAGE":
      return{
        loading:false,
        data:action.payload
      }
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
