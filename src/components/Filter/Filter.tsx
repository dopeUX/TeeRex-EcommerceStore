import React, { FC } from "react";
import FilterCardItems from "../FilterCardItems/FilterCardItems";
import "./main.css";
import FilterItemsArray from "../../FilterItemsArray";

const Filter = () => {
  return (
    <section className="filter">
      <h2>Filter</h2>

      <div className="filter-sections">
        <FilterCardItems filterItems={FilterItemsArray} />
      </div>
    </section>
  );
};

export default Filter;
