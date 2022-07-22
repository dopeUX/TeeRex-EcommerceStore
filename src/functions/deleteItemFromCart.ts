
const deleteItemFromCart = (index:number, dispatch:Function) =>{
    dispatch({
        type: "DELETE_ITEM_FROM_CART",
        payload: index,
      });
}

export default deleteItemFromCart;