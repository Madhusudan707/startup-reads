import {useLibrary} from '../contexts'
import {useNavigate} from 'react-router-dom'

export const useProductDetails = ()=>{
const {libraryState,libraryDispatch,setProduct,product} = useLibrary()

let singleProduct
const navigate = useNavigate()

    const productDetailsHandler=(id)=>{
        singleProduct = libraryState.data.filter((item)=>item._id===id)
        setProduct(singleProduct[0])
        libraryDispatch({type:"PRODUCT_PAGE",payload:singleProduct})
        if( singleProduct){
            navigate(`/product/${singleProduct[0].title}`)
        }
    }
    return {productDetailsHandler,product}
}