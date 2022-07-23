import * as constants from "../constants/constants";

const deleteItemFromCart = (index:number, dispatch:Function) =>{
    dispatch({
        type: constants.deleteItemFromCart,
        payload: index,
      });
}

export default deleteItemFromCart;