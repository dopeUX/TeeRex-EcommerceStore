import React, { useContext, useEffect } from "react";
import "./main.css";
import Context from "../../reducers/context";
import GlobalStateProvider from "../../reducers/globalStateProvider";

export default function Header() {
  // const { globalState, globalDispatch } = useContext(Context);
  const { state, dispatch }: any = useContext(Context);
  useEffect(() => {
    console.log(state?.count);
    console.log(state?.searchQuery);
  });
  return (
    <header>
      <section className="header-top">
        <h1>TeeRex</h1>
        <img className="header-cart-icon" src="assets/cart.svg" alt="" />
      </section>

      <section className="header-search-section">
        <input
          type="text"
          className="search"
          placeholder="search here..."
          onChange={(e) => {
            dispatch({
              type: "SEARCH_QUERY",
              payload: e.currentTarget.value,
            });
          }}
        />
        <img src="assets/filter.svg" alt="" />
      </section>

      <button
        onClick={() => {
          dispatch({
            type: "DECREMENT",
          });
        }}
      >
        Click
      </button>

      <h1>{state?.count}</h1>
    </header>
  );
}
