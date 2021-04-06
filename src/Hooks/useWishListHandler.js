
// import {}

// const useWishListHandler = ()=>{

// }

// const wishListHandler = (product, toastMsg) => {
    
//     product.wish?setToastColor("#d34d32"):setToastColor("#59D78B")
//     let newArr = productsState.data.map((item) => {
//       if (item.isbn === product.isbn) {
//         return { ...item, wish: !product.wish };
//       }
//       return item;
//     });
//     ProductsDispatch({ type: "OnSuccess", payload: newArr });

//     let newArr2 = newArr.filter((item) => (item.wish === true ? item : null));
//     WishListDispatch({ type: "AddWish", payload: { product: newArr2 } });

//     setToastMsg(toastMsg);
//     setShowToast(true);
//     setTimeout(() => {
//       setShowToast(false);
//     }, 2000);
//   };
