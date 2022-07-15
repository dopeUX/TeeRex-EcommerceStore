import React, { FC } from "react";
import FilterCard from "../FilterCard/FilterCard";

interface filterItems {
  title: string;
  items: Array<string>;
}
interface FilterCardItemsProps {
  filterItems: Array<filterItems>;
}

const FilterCardItems: FC<FilterCardItemsProps> = ({ filterItems }) => {
  return (
    <div className="filter-card-items">
      {filterItems.map((item, index) => {
        return (
          <FilterCard
            key={index}
            filterTitle={item.title}
            filterItems={item.items}
          />
        );
      })}
    </div>
  );
};

export default FilterCardItems;
