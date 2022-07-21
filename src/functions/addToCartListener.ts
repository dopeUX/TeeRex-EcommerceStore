
type url = string;
interface ProductItemCardProps {
    productName: string;
    productPrice: number;
    productImage: url;
    productQuantity: number;
    productId:number;
}

const onAddTocartListener = (product: ProductItemCardProps,dispatch:any) => {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: product,
    });
}

export default onAddTocartListener;