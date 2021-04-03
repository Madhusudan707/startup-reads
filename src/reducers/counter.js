

export const initialState = {count:0}

export const counterReducer=(state, action) =>{
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      // case 'EqualToCart':
      //   return {count:action.payload}
      default:
        return state
    }
  }