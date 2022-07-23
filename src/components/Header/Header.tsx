import { useContext, useLayoutEffect, useRef } from "react";
import "./main.css";
import Context from "../../store/context";
import { Link } from "react-router-dom";
import filterBySearch from "../../functions/filterbySearch";
import { useLocation } from "react-router-dom";
import * as constants from "../../constants/constants";

export default function Header() {
  const { state, dispatch }: any = useContext(Context);
  const searchSectionRef: any = useRef();
  const location = useLocation();

  useLayoutEffect(() => {
    if (window.location.href === "http://localhost:3000/cart") {
      searchSectionRef.current.style.display = "none";
    } else {
      searchSectionRef.current.style.display = "flex";
    }
  }, [location]);

  return (
    <header>
      <section className="header-top">
        <h1>TeeRex</h1>
        <Link to="/cart">
          <img className="header-cart-icon" src="assets/cart.svg" alt="" />
        </Link>
      </section>
      <section ref={searchSectionRef} className="header-search-section">
        <input
          type="text"
          className="search"
          placeholder="search here..."
          value={state?.searchQuery}
          onChange={(e) => {
            filterBySearch(dispatch, e.currentTarget.value);
          }}
        />
        <img
          src="assets/filter.svg"
          alt=""
          onClick={() => {
            dispatch({
              type: constants.updateDialogState,
              payload: {
                display: "block",
              },
            });
          }}
        />
      </section>
    </header>
  );
}
