
import {WishList} from  '../Components/index'
import {Empty} from '../Components/Reusable'
import { useFetchLibrary } from "../hooks";
export const WishlistPage = () => {
    const { wishListState } = useFetchLibrary();
    return (
        <div>
            {wishListState.wishes.length === 0 ? (
        <Empty
          imageSrc="empty_wish.svg"
          nameClass="lg:w-2/4 lg:h-2/4 lg:mt-32 lg:p-12 w-72 mt-64"
          altText="empty cart"
          text="Your Wishlist is currently empty, Make Some Wish"
          h1Class = "lg:text-3xl absolute  text-red-600 lg:bottom-16 lg:pl-72 fixed text-center text-1xl"
        />
      ) : (
        <>
           <WishList/>
        </>
       
      )}
           
        </div>
    )
}
