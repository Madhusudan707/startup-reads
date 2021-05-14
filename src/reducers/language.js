export const initialState = {
  data: {},
  error: "",
};

export const languageReducer = (state, action) => {
  switch (action.type) {
    case "DEFAULT":
      return {
        data: {},
      };
    case "ADD_HINDI":
      return {
        data: action.payload.lang,
        error: "",
      };
    default:
      return state;
  }
};
