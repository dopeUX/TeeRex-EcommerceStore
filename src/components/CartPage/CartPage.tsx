import React, { FC, useContext, useEffect } from "react";
import Context from "../../reducers/context";
import CartItemcard from "../CartItemCard/CartItemCard";
import "./main.css";
import { useNavigate } from "react-router-dom";

const CartPage: FC<any> = (props) => {
  const { state, dispatch }: any = useContext(Context);
  const nav = useNavigate();

  type url = string;

  interface CartItemcardProps {
    productImage: url;
    productName: string;
    productPrice: number;
    productQuantity: number;
  }

  useEffect(() => {
    console.log(state?.cartItems);
  }, [state?.cartItems]);

  return (
    <div className="cart-page inside-body">
      <section className="cart-page-section">
        <div className="cart-page-section-header">
          <img
            src="assets/back.svg"
            onClick={() => {
              nav(-1);
            }}
            alt=""
          />
          <h1>Your cart</h1>
        </div>
        <section className="cart-page-items-section">
          {state?.cartItems.map((item: CartItemcardProps, index: number) => {
            return (
              <CartItemcard
                key={index}
                productName={item.productName}
                productImage={item.productImage}
                productPrice={item.productPrice}
                productQuantity={item.productQuantity}
                onDelete={() => {
                  dispatch({
                    type: "DELETE_ITEM_FROM_CART",
                    payload: index,
                  });
                }}
              />
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default CartPage;
