import React, { FC, useContext } from "react";
import Context from "../../store/context";
import FilterCard from "../FilterCard/FilterCard";

interface filterItems {
  title: string;
  items: Array<string>;
}
interface FilterCardItemsProps {
  filterItems: Array<filterItems>;
}

const FilterCardItems: FC<FilterCardItemsProps> = ({ filterItems }) => {
  const { state, dispatch }: any = useContext(Context);
  return (
    <div className="filter-card-items">
      {filterItems.map((item, index) => {
        return (
          <FilterCard
            key={index}
            filterTitle={item.title}
            filterItems={item.items}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default FilterCardItems;
