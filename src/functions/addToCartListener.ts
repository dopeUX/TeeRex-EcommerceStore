
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
      type: "ADD_ITEM_TO_CART",
      payload: product,
    });
    alert('Product added to cart successfully');
  }else{
    alert('Product already added to cart!');
  }
}

export default onAddTocartListener;