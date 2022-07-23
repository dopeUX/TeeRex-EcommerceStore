import * as constants from "../constants/constants";

type url = string;
interface CartItem {
    productName: string;
    productPrice: number;
    productImage: url;
    productQuantity: number;
    productQuantitySet:number;
    productId:number;
}

const onAddTocartListener = (product: CartItem,dispatch:any, state:any) => {
   if(state?.cartItems.findIndex((item:any)=>item.productId===product.productId)===-1){
    dispatch({
      type: constants.addItemToCart,
      payload: product,
    });
    alert('Product added to cart successfully');
  }else{
    alert('Product already added to cart!');
  }
}

export default onAddTocartListener;