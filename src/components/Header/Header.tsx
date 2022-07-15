import React from "react";
import "./main.css";

export default function Header() {
  return (
    <header>
      <section className="header-top">
        <h1>TeeRex</h1>
        <img className="header-cart-icon" src="assets/cart.svg" alt="" />
      </section>

      <section className="header-search-section">
        <input type="text" className="search" placeholder="search here..." />
        <img src="assets/filter.svg" alt="" />
      </section>
    </header>
  );
}
