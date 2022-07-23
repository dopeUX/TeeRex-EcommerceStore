import React, { FC, useEffect, useState, useContext } from "react";
import getProductItems from "../../functions/getProductItems";
import Context from "../../store/context";
import ProductItemCard from "../ProductItemCard/ProductItemCard";
import "./main.css";

type imageURL = string;

interface ProductItem {
  name: string;
  price: number;
  imageURL: imageURL;
  quantity: number;
  id: number;
}

const ProductsSection: FC<any> = () => {
  const [productItems, setProductItems] = useState<any>([])!;
  const { state, dispatch }: any = useContext(Context);
  useEffect(() => {
    getProductItems()
      .then((res) => {
        console.log(res);
        setProductItems(res);
        dispatch({
          type: "PRODUCT_ITEMS_INIT",
          payload: res,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }, []); ///=> called only on initial render ----

  useEffect(() => {
    console.log(state?.cartItems);
    console.log(state?.activeFilters);
    // dispatch({
    //   type: "FILTER_PRODUCT_ITEMS",
    // });
  }, [state?.activeFilters]);

  return (
    <section className="products-section">
      <h1>Shop</h1>
      <div className="products-section-items-grid">
        {state?.filteredItems
          .filter(
            (item: any) =>
              item.name
                .toLowerCase()
                .includes(state?.searchQuery.toLowerCase()) ||
              item.color
                .toLowerCase()
                .includes(state?.searchQuery.toLowerCase()) ||
              item.type
                .toLowerCase()
                .includes(state?.searchQuery.toLowerCase()),
          )
          .map((item: ProductItem, index: number) => {
            return (
              <ProductItemCard
                key={index}
                productName={item.name}
                productPrice={item.price}
                productImage={item.imageURL}
                productQuantity={item.quantity}
                productId={item.id}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ProductsSection;
