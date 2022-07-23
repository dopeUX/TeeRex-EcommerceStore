import * as constants from "../constants/constants";

const updateActiveFilters = (dispatch:any,filterTitle:string, filter:string) =>{
    dispatch({
        type: constants.updateActiveFilter,
        payload: {
          filterType: filterTitle.toLowerCase(),
          filter: filter,
        },
      });
      dispatch({
        type: constants.filterProductItems,
      });
}

export default updateActiveFilters