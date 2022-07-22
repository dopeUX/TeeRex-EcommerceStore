
const  updateCartItemQuantity = async(dispatch:Function, index:number, quantity:number) =>{
   await dispatch({
        type: "UPDATE_CART_ITEM_QUANTITY",
        payload: {
          index,
          quantity: quantity,
        },
      });
}

export default updateCartItemQuantity;