import React, { FC } from "react";
import FilterCardItems from "../FilterCardItems/FilterCardItems";
import "./main.css";
import FilterItemsArray from "../../FilterItemsArray";

const Filter = () => {
  return (
    <section className="filter">
      <section className="filter-child">
        <div className="filter-header">
          <h2>Filter</h2>
        </div>

        <div className="filter-sections">
          <FilterCardItems filterItems={FilterItemsArray} />
        </div>
      </section>
    </section>
  );
};

export default Filter;
