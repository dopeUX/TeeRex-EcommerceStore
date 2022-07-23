import { FC, useEffect, useContext } from "react";
import * as constants from "../../constants/constants";
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
  const { state, dispatch }: any = useContext(Context);
  useEffect(() => {
    getProductItems()
      .then((res) => {
        dispatch({
          type: constants.loadProductItems,
          payload: res,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }, []); ///=> called only on initial render ----

  return (
    <section className="products-section">
      <h1>Shop</h1>
      <div className="products-section-items-grid">
        {state?.filteredItems.map((item: ProductItem, index: number) => {
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
