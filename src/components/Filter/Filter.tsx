import React, {
  FC,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import FilterCardItems from "../FilterCardItems/FilterCardItems";
import "./main.css";
import FilterItemsArray from "../../FilterItemsArray";
import Context from "../../store/context";
import clearAllFilters from "../../functions/clearAllFilters";

const Filter = () => {
  const { state, dispatch }: any = useContext(Context);
  const [index, setIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      if (window.innerWidth > 1022) {
        dispatch({
          type: "UPDATE_DIALOG_STATE",
          payload: {
            display: "block",
          },
        });
      } else {
        dispatch({
          type: "UPDATE_DIALOG_STATE",
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
                type: "UPDATE_DIALOG_STATE",
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
