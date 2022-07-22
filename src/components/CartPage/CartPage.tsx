import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import Context from "../../store/context";
import CartItemcard from "../CartItemCard/CartItemCard";
import "./main.css";
import { useNavigate } from "react-router-dom";
import deleteItemFromCart from "../../functions/deleteItemFromCart";
import totalPriceCalculator from "../../functions/totalPriceCalculator";

const CartPage: FC<any> = (props) => {
  const { state, dispatch }: any = useContext(Context);
  const nav = useNavigate();
  const [total, setTotal] = useState(totalPriceCalculator(state?.cartItems));
  type url = string;

  interface CartItemcardProps {
    productImage: url;
    productName: string;
    productPrice: number;
    productQuantity: number;
    productQuantitySet: number;
    productId: number;
  }

  const cartTotal = useMemo(() => {
    console.log(state?.cartItems);
    setTotal(totalPriceCalculator(state?.cartItems));
  }, [state?.cartItems]);

  useEffect(() => {
    // updateCartTotal(dispatch, state?.cartItems);
    // setTotal()
  }, []);

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
                productQuantitySet={item.productQuantitySet}
                index={index}
                productId={item.productId}
                updateCartTotal={() => {
                  setTotal(totalPriceCalculator(state?.cartItems));
                  console.log(state?.cartItems);
                }}
                onDelete={() => {
                  deleteItemFromCart(index, dispatch);
                  // updateCartTotal(dispatch, state?.cartItems);
                }}
              />
            );
          })}
        </section>
      </section>
      <div className="total-price-footer">
        <h2>Total</h2>
        <h3>Rs {total}</h3>
      </div>
    </div>
  );
};

export default CartPage;
