import React, { FC, useState, useContext, useEffect } from "react";
import filterBySearch from "../../functions/filterbySearch";
import updateActiveFilters from "../../functions/updateActiveFilters";
import Context from "../../store/context";
import "./main.css";

interface FilterCardProps {
  filterTitle: string;
  filterItems: Array<string>;
  activeIndex: number | null;
  onClick: Function;
}

const FilterCard: FC<FilterCardProps> = ({
  filterTitle,
  filterItems,
  activeIndex,
  onClick,
}) => {
  const [activeIndexMenu, setActiveIndexMenu] = useState<Number | null>(
    activeIndex,
  );
  const { state, dispatch }: any = useContext(Context);

  useEffect(() => {
    console.log(state.activeFilters);
  });
  return (
    <div className="filter-card" key={activeIndex}>
      <h4>{filterTitle}</h4>
      {filterItems.map((item, index) => {
        return (
          <div
            key={index}
            className="filter-card-single-item"
            onClick={() => {
              filterBySearch(dispatch, ""); ///// setting the search query to empty string ----
              if (index === activeIndexMenu) {
                ///clearing the filter if the current filter is active
                setActiveIndexMenu(null);
                updateActiveFilters(dispatch, filterTitle, "");
              } else {
                ///updating the filter
                updateActiveFilters(dispatch, filterTitle, item);
              }
            }}
          >
            <small
              className={`filter-card-single-item-desc ${
                index === activeIndexMenu ? "active" : "inactive"
              }`}
              onClick={() => {
                setActiveIndexMenu(index);
              }}
            >
              {item}
            </small>
            <div
              className={`filter-card-single-item-dot ${
                index === activeIndexMenu && "active-dot"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterCard;
