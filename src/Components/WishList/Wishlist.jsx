import { Card,Toast } from "../Reusable/";
import {useToast} from '../../contexts'
import { useFetchLibrary} from "../../hooks";

export const WishList = () => {
  const {toastMsg,toastColor} = useToast()
  const { wishListState} = useFetchLibrary();
  return (
    <div className="flex flex-col justify-center p-1 flex-wrap mt-72 lg:flex-row lg:p-10 lg:mt-52 lg:w-full">
       {toastMsg?<Toast toastClass="fixed top-32 right-8" bgColor={toastColor} msg={toastMsg}/>:null} 
      {wishListState.wishes.map((book) => {
        return (
          <Card
            key={book._id}
            bookTitle={book.title}
            imageURL={book.image}
            price={book.price}
            wish={book.wish}
            isHide={false}
            product={book}
            isbn={book.isbn}
            _id={book._id}
          />
        );
      })}
    </div>
  );
};
