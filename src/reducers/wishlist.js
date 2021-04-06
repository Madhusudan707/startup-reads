export const initialState ={
    wishes:[],
    error:""
  }
  
  export const wishListReducer = (state,action)=>{
    switch(action.type){
      case 'ADD-WISH':
        return {
          
          wishes:action.payload.product,
          error:""
        }
      
      case 'ON-FAILURE':
        return{
          loading:false,
          wishes:[],
          error:"Unable to Load Wish, Try after sometime"
        }
      default:
        return state
    }
  }
