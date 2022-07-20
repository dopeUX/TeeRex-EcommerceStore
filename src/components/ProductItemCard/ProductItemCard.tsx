import React, { FC, useState } from "react";
import "./main.css";

type url = string;

interface ProductItemCardProps {
  productName: string;
  productPrice: number;
  productImage: url;
  productQuantity: number;
}

const ProductItemCard: FC<ProductItemCardProps> = ({
  productName,
  productPrice,
  productImage,
  productQuantity,
}) => {
  function onAddTocartListener() {}

  return (
    <div className="product-item-card">
      <img src={productImage} alt="" />
      <div className="product-item-card-details">
        <h3>{productName}</h3>
        <h2>Rs.{productPrice}</h2>
      </div>

      <button
        onClick={() => {
          onAddTocartListener();
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItemCard;
