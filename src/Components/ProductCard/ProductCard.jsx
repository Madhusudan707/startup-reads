
import { Card,Toast } from "../Reusable";
import {useLibrary} from '../../contexts'
import {useCartHandler} from '../../hooks'
export const ProductCard = () => {
  const { libraryState } = useLibrary();
  const {toastMsg,cartHandler,toastColor} = useCartHandler()
  return (
    <div className="flex flex-col justify-center p-1 flex-wrap mt-24 lg:flex-row lg:p-10 lg:mt-32 lg:w-full">
     {toastMsg?<Toast toastClass="fixed top-32 right-8" bgColor={toastColor} msg={toastMsg}/>:null} 
      {libraryState.data.map((book) => {
        return (
          <Card
            key={book._id}
            bookTitle={book.title}
            imageURL={book.image}
            price={book.price}
            isbn={book.isbn}
            wish={book.wish}
            _id={book._id}
            product={book}
            cartHandler={cartHandler}
          />
        );
      })}
      
    </div>
  );
};
