export const initialState ={
  data:[],
  loading:true,
  error:''
}

export const productsReducer = (state,action)=>{
  switch(action.type){
    case 'OnSuccess':
      return {
        loading:false,
        data:action.payload,
        error:''
      }
    case 'OnFailure':
      return{
        loading:false,
        data:{},
        error:'Unable to Load Products, Try after sometime'
      }
  
    case 'ascending':
      return{
             loading:false,
             data:action.payload
      }
    case 'descending':
      return{
        loading:false,
        data:action.payload
      }

    case 'in-stock':
      return{
        loading:false,
        data:action.payload
      }

    case 'fast-delivery':
      return{
        loading:false,
        data:action.payload
      }
    case 'reset':
      console.log("reset")
      return {
        loading:false,
        data:action.payload
      }
      
    default:
      return state
  }
}


