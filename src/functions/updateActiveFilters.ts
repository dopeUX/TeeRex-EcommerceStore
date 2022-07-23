
const updateActiveFilters = (dispatch:any,filterTitle:string, filter:string) =>{
    dispatch({
        type: "UPDATE_ACTIVE_FILTER",
        payload: {
          filterType: filterTitle.toLowerCase(),
          filter: filter,
        },
      });
      dispatch({
        type: "FILTER_PRODUCT_ITEMS",
      });
}

export default updateActiveFilters