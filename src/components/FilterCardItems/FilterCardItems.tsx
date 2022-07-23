import React, { FC, useContext } from "react";
import Context from "../../store/context";
import FilterCard from "../FilterCard/FilterCard";

interface filterItems {
  title: string;
  items: Array<string>;
}
interface FilterCardItemsProps {
  filterItems: Array<filterItems>;
  activeIndex: number | null;
}

const FilterCardItems: FC<FilterCardItemsProps> = ({
  filterItems,
  activeIndex,
}) => {
  const { state, dispatch }: any = useContext(Context);
  return (
    <div className="filter-card-items" key={activeIndex}>
      {/* Key attributed is added so that the child component re-renders when the clear filter state changes */}
      {filterItems.map((item, index) => {
        return (
          <FilterCard
            key={index}
            filterTitle={item.title}
            filterItems={item.items}
            activeIndex={activeIndex}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default FilterCardItems;
