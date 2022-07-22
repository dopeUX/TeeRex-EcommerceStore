import React, { FC, useState, useContext } from "react";
import Context from "../../store/context";
import "./main.css";

interface FilterCardProps {
  filterTitle: string;
  filterItems: Array<string>;
  onClick: Function;
}

const FilterCard: FC<FilterCardProps> = ({
  filterTitle,
  filterItems,
  onClick,
}) => {
  const [activeIndex, setActiveIndex] = useState<Number>();
  const { dispatch }: any = useContext(Context);
  return (
    <div className="filter-card">
      <h4>{filterTitle}</h4>
      {filterItems.map((item, index) => {
        return (
          <div
            key={index}
            className="filter-card-single-item"
            onClick={() => {
              // dispatch({
              //   type: "FILTER_PRODUCT_ITEMS",
              //   payload: {
              //     filterType: filterTitle.toLowerCase(),
              //     filter: item,
              //   },
              // });

              // console.log("rfreg");
              dispatch({
                type: "UPDATE_ACTIVE_FILTER",
                payload: {
                  filterType: filterTitle.toLowerCase(),
                  filter: item,
                },
              });
              dispatch({
                type: "FILTER_PRODUCT_ITEMS",
              });
            }}
          >
            <small
              className={`filter-card-single-item-desc ${
                index === activeIndex ? "active" : "inactive"
              }`}
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
