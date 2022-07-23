import React, { FC, useContext, useEffect, useState } from "react";
import FilterCardItems from "../FilterCardItems/FilterCardItems";
import "./main.css";
import FilterItemsArray from "../../FilterItemsArray";
import Context from "../../store/context";
import clearAllFilters from "../../functions/clearAllFilters";

const Filter = () => {
  const { state, dispatch }: any = useContext(Context);
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section className="filter">
      <section className="filter-child">
        <div className="filter-header">
          <h2>Filter</h2>
          <h3
            onClick={() => {
              if (index === null) {
                setIndex(9999999);
                clearAllFilters(dispatch);
              } else {
                setIndex(null);
                clearAllFilters(dispatch);
              }
            }}
          >
            clear filters
          </h3>
          <img src="assets/close.svg" alt="" />
        </div>

        <div className="filter-sections">
          <FilterCardItems filterItems={FilterItemsArray} activeIndex={index} />
        </div>
      </section>
    </section>
  );
};

export default Filter;
