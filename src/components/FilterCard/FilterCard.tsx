import React, { FC, useState } from "react";
import "./main.css";

interface FilterCardProps {
  filterTitle: string;
  filterItems: Array<string>;
}

const FilterCard: FC<FilterCardProps> = ({ filterTitle, filterItems }) => {
  const [activeIndex, setActiveIndex] = useState<Number>();
  return (
    <div className="filter-card">
      <h4>{filterTitle}</h4>
      {filterItems.map((item, index) => {
        return (
          <div className="filter-card-single-item">
            <small
              className={`filter-card-single-item-desc ${
                index === activeIndex ? "active" : "inactive"
              }`}
              key={index}
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {item}
            </small>
            <div
              className={`filter-card-single-item-dot ${
                index === activeIndex && "active-dot"
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterCard;
