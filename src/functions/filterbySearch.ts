import * as constants from "../constants/constants";

const filterBySearch = (dispatch:Function, query:string) =>{
    dispatch({
        type: constants.searchQuery,
        payload:query,
      });
}

export default filterBySearch;