import React, { FC, useContext, useEffect, useState } from "react";
import updateCartItemQuantity from "../../functions/updateCartItemQuantity";
import Context from "../../store/context";
import "./main.css";

type url = string;

interface CartItemcardProps {
  productImage: url;
  productName: string;
  productPrice: number;
  productQuantity: number;
  productQuantitySet: number;
  index: number;
  productId: number;
  updateCartTotal: Function;
  onDelete: Function;
}

const CartItemcard: FC<CartItemcardProps> = ({
  productName,
  productImage,
  productPrice,
  productQuantity,
  productQuantitySet,
  index,
  productId,
  updateCartTotal,
  onDelete,
}) => {
  const [quantity, setQuantity] = useState(productQuantitySet);
  const { state, dispatch }: any = useContext(Context);

  useEffect(() => {
    updateCartItemQuantity(dispatch, index, quantity);
  }, [quantity]);

  return (
    <div className="cart-item-card">
      <img src={productImage} alt="" />
      <section className="cart-item-card-details">
        <h1>{productName}</h1>
        <h2>Rs {productPrice * quantity}</h2>

        <div className="card-item-card-quantity">
          <button
            className="quantity-btn"
            onClick={() => {
              if (quantity !== 1) {
                setQuantity((x: number) => x - 1);
                // updateCartItemQuantity(dispatch, index, quantity).then(
                //   (res) => {
                //     updateQuantity();
                //   },
                // );
                // dispatch({
                //   type: "DECREASE_QUANTITY",
                //   payload: index,
                // });
                //  updateCartTotal(dispatch, state?.cartItems);
              }
            }}
          >
            -
          </button>
          <h3>{quantity}</h3>
          <button
            className="quantity-btn"
            onClick={() => {
              if (quantity < productQuantity) {
                setQuantity((x: number) => x + 1);
                // updateCartItemQuantity(dispatch, index, quantity).then(
                //   (res) => {
                //     updateQuantity();
                //   },
                // );
                // dispatch({
                //   type: "INCREASE_QUANTITY",
                //   payload: index,
                // });
                // updateCartTotal(dispatch, state?.cartItems);
              } else {
                alert("Oops!! the product is out of stock");
              }
            }}
          >
            +
          </button>
        </div>
      </section>

      <img
        src="assets/delete.svg"
        className="delete-cart-item"
        alt=""
        onClick={() => {
          onDelete();
        }}
      />
    </div>
  );
};

export default CartItemcard;
