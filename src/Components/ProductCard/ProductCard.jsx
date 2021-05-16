
import { Card } from "../Reusable";
import {useLibrary} from '../../contexts'
export const ProductCard = () => {
  const { libraryState } = useLibrary();
  return (
    <div className="flex flex-col justify-center p-1 flex-wrap mt-72 lg:flex-row lg:p-10 lg:mt-52 lg:w-full">
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
          />
        );
      })}
    </div>
  );
};
