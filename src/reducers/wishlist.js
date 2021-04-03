export const initialState ={
    wishes:[],
    error:''
  }
  
  export const wishListReducer = (state,action)=>{
    switch(action.type){
      case 'AddWish':
        return {
          
          wishes:action.payload.product,
          error:''
        }
      
      case 'OnFailure':
        return{
          loading:false,
          wishes:[],
          error:'Unable to Load Wish, Try after sometime'
        }
      default:
        return state
    }
  }
