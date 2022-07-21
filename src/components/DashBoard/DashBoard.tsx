import React, { FC } from "react";
import Filter from "../Filter/Filter";
import ProductsSection from "../ProductsSection/ProductsSection";
import "./main.css";

const Dashboard: FC<any> = (props) => {
  return (
    <div className="dashboard">
      <div className="homepage-divider"></div>
      <Filter />
      <ProductsSection />
    </div>
  );
};

export default Dashboard;
