
const clearAllFilters = (dispatch:Function) =>{
    dispatch({
        type: "CLEAR_ALL_FILTERS",
      });
    dispatch({
        type: "FILTER_PRODUCT_ITEMS",
    });
}

export default clearAllFilters;