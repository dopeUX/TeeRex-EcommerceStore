
const filterBySearch = (dispatch:Function, query:string) =>{
    dispatch({
        type: "SEARCH_QUERY",
        payload:query,
      });
}

export default filterBySearch;