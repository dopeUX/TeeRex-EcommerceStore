import {
  FC,
  useContext,
  useLayoutEffect,
  useRef,
  useMemo,
} from "react";
import Context from "../../store/context";
import CartItemcard from "../CartItemCard/CartItemCard";
import "./main.css";
import { useNavigate } from "react-router-dom";
import deleteItemFromCart from "../../functions/deleteItemFromCart";
import totalPriceCalculator from "../../functions/totalPriceCalculator";

const CartPage: FC<any> = () => {
  const { state, dispatch }: any = useContext(Context);
  const emptyCartRef: any = useRef();
  const nav = useNavigate();
  type url = string;
  interface CartItemcardProps {
    productImage: url;
    productName: string;
    productPrice: number;
    productQuantity: number;
    productQuantitySet: number;
    productId: number;
  }

  const cartTotal: any = useMemo(
    () => totalPriceCalculator(state?.cartItems),
    [state?.cartItems],
  );

  useLayoutEffect(() => {
    if (state?.cartItems.length === 0) {
      emptyCartRef.current.style.display = "flex";
    }
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
        <div ref={emptyCartRef} className="cart-page-section-empty-cart">
          <img src="assets/sad.svg" alt="" />
          <h3>Oops! your cart is empty</h3>
          <br />
          <button
            onClick={() => {
              nav(-1);
            }}
          >
            Explore
          </button>
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
                onDelete={() => {
                  deleteItemFromCart(index, dispatch);
                }}
              />
            );
          })}
        </section>
      </section>
      <div className="total-price-footer">
        <h2>Total</h2>
        <h3>Rs {cartTotal}</h3>
      </div>
    </div>
  );
};

export default CartPage;
