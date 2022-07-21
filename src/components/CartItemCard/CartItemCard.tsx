import React, { FC, useState } from "react";
import "./main.css";

type url = string;

interface CartItemcardProps {
  productImage: url;
  productName: string;
  productPrice: number;
  productQuantity: number;
  onDelete: Function;
}

const CartItemcard: FC<CartItemcardProps> = ({
  productName,
  productImage,
  productPrice,
  productQuantity,
  onDelete,
}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="cart-item-card">
      <img src={productImage} alt="" />
      <section className="cart-item-card-details">
        <h1>{productName}</h1>
        <h2>Rs {productPrice}</h2>

        <div className="card-item-card-quantity">
          <button className="quantity-btn">-</button>
          <h3>{quantity}</h3>
          <button className="quantity-btn">+</button>
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
