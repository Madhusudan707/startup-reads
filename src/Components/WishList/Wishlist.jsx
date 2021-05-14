import { Card } from "../Reusable/";
import { useFetchLibrary } from "../../hooks";

export const WishList = () => {
  const { wishListState } = useFetchLibrary();
  return (
    <div className="flex flex-col justify-center p-1 flex-wrap mt-72 lg:flex-row lg:p-10 lg:mt-52 lg:w-full">
      {wishListState.wishes.map((book) => {
        return (
          <Card
            key={book._id}
            bookTitle={book.title}
            imageURL={book.image}
            price={book.price}
            isHide={true}
            product={book}
          />
        );
      })}
    </div>
  );
};
