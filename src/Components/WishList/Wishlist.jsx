import { Card } from "../Reusable/";
import { useFetchLibrary } from "../../hooks";

export const WishList = () => {
  const { wishListState } = useFetchLibrary();
  console.log(wishListState.wishes)
  return (
    <div className="flex flex-col justify-center p-1 flex-wrap mt-72 lg:flex-row lg:p-10 lg:mt-52 lg:w-full">
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
