import { useCart,useLanguage } from "../../contexts";
export const CartHeading = () => {
    const {totalItemsInCart } = useCart();
    const {languageState} = useLanguage()
  return (
    <>
      <div className="flex justify-between border-b pb-8">
        <h1 className=" text-2xl">{languageState.data.shopping_cart||"Shopping Cart"}</h1>
        <h2 className=" text-2xl">{totalItemsInCart} {languageState.data.items||"Items"}</h2>
      </div>
      <div className="flex  items-center text-center  text-2xl uppercase text-gray-600">
        <h3 className="w-2/5 ">
        {languageState.data.items||"Items"}
        </h3>
        <h3 className="w-1/5 ">
        {languageState.data.quantity||"Qty."}
        </h3>
        <h3 className="w-1/5">
        {languageState.data.price||"Price"}( <i className="fas fa-rupee-sign"></i> )
        </h3>
        <h3 className="w-1/5">
        {languageState.data.total||"Total"}( <i className="fas fa-rupee-sign"></i> )
        </h3>
        <h3 className="w-1/5">
        {languageState.data.remove||"Remove"}
        </h3>
      </div>
    </>
  );
};
