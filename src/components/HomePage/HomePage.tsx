import React from "react";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import ProductsSection from "../ProductsSection/ProductsSection";
import "./main.css";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-divider"></div>
      <Header />
      <Filter />
      <ProductsSection />
    </div>
  );
}
