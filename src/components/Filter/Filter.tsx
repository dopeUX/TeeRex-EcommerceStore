import { useContext, useLayoutEffect, useState } from "react";
import FilterCardItems from "../FilterCardItems/FilterCardItems";
import "./main.css";
import FilterItemsArray from "../../FilterItemsArray";
import Context from "../../store/context";
import clearAllFilters from "../../functions/clearAllFilters";
import * as constants from "../../constants/constants";

const Filter = () => {
  const { state, dispatch }: any = useContext(Context);
  const [index, setIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1022) {
        dispatch({
          type: constants.updateDialogState,
          payload: {
            display: "block",
          },
        });
      } else {
        dispatch({
          type: constants.updateDialogState,
          payload: {
            display: "none",
          },
        });
      }
    });
  }, []);

  return (
    <section
      style={state?.filterDialogStyle}
      className={`filter ${window.innerWidth === 870 && "hide-dialogue"}`}
    >
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
          <img
            src="assets/close.svg"
            alt=""
            onClick={() => {
              dispatch({
                type: constants.updateDialogState,
                payload: {
                  display: "none",
                },
              });
            }}
          />
        </div>

        <div className="filter-sections">
          <FilterCardItems filterItems={FilterItemsArray} activeIndex={index} />
        </div>
      </section>
    </section>
  );
};

export default Filter;
