import { FC, useContext } from "react";
import onAddTocartListener from "../../functions/addToCartListener";
import Context from "../../store/context";
import "./main.css";

type url = string;

interface ProductItemCardProps {
  productName: string;
  productPrice: number;
  productImage: url;
  productQuantity: number;
  productId: number;
}

const ProductItemCard: FC<ProductItemCardProps> = ({
  productName,
  productPrice,
  productImage,
  productQuantity,
  productId,
}) => {
  const { state, dispatch }: any = useContext(Context);

  return (
    <div className="product-item-card">
      <img src={productImage} alt="" />
      <div className="product-item-card-details">
        <h3>{productName}</h3>
        <h2>Rs.{productPrice}</h2>
      </div>

      <button
        onClick={() => {
          onAddTocartListener(
            {
              productName,
              productImage,
              productPrice,
              productQuantity,
              productQuantitySet: 1,
              productId,
            },
            dispatch,
            state,
          );
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItemCard;
