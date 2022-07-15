import React, { FC, useEffect, useState } from "react";
import getProductItems from "../../functions/getProductItems";
import ProductItemCard from "../ProductItemCard/ProductItemCard";
import "./main.css";

type imageURL = string;

interface ProductItem {
  name: string;
  price: number;
  imageURL: imageURL;
  quantity: number;
}

const ProductsSection = () => {
  const [productItems, setProductItems] = useState<any>([])!;

  useEffect(() => {
    getProductItems()
      .then((res) => {
        console.log(res);
        setProductItems(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []); ///=> called only on initial render ----

  return (
    <section className="products-section">
      <h1>Shop</h1>
      <div className="products-section-items-grid">
        {productItems.map((item: ProductItem, index: number) => {
          return (
            <ProductItemCard
              key={index}
              productName={item.name}
              productPrice={item.price}
              productImage={item.imageURL}
              productQuantity={item.quantity}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
