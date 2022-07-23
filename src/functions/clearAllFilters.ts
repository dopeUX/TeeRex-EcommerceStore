import * as constants from "../constants/constants";

const clearAllFilters = (dispatch:Function) =>{
    dispatch({
        type: constants.clearAllFilters,
      });
    dispatch({
        type: constants.filterProductItems,
    });
}

export default clearAllFilters;