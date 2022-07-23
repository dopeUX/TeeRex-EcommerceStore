import * as constants from "../constants/constants";

const  updateCartItemQuantity = async(dispatch:Function, index:number, quantity:number) =>{
   await dispatch({
        type: constants.updateCartItemQuantity,
        payload: {
          index,
          quantity: quantity,
        },
      });
}

export default updateCartItemQuantity;