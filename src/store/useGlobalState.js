import { useReducer } from "react";

const appReducer = (state, action)=>{
    switch(action.type){
  
      case 'INCREMENT':
        state.count++
        return {
           ...state,
          //  count:state.count++
        }
      case 'DECREMENT':
        return {
            ...state,
            count:state.count--
        }
      case 'PRODUCT_ITEMS_INIT':
        return {
            ...state,
            productItems:action.payload,
            filteredItems:action.payload
        }
      case 'ADD_ITEM_TO_CART':
        //state.cartItems.push(action.payload)
        return {
            ...state,
            cartItems:[...state.cartItems, action.payload]
        }
      case 'DELETE_ITEM_FROM_CART':
        
        return {
           ...state,
           cartItems:[...state.cartItems.slice(0, action.payload), ...state.cartItems.slice(action.payload+1)]
        }  
      case 'UPDATE_CART_ITEM_QUANTITY':
        state.cartItems[action.payload.index].productQuantitySet = action.payload.quantity;
        return {
          ...state,
         cartItems:[...state.cartItems]
        }   
      case 'FILTER_PRODUCT_ITEMS':
        /// if the filter is set to empty string, its gonna return full products or it will be returning filtered items;
        const arr = (filterType) => state.productItems.filter((item)=>{
             return state.activeFilters.color.toLowerCase()!==''?
           item.color.toLowerCase()===state.activeFilters.color.toLowerCase():state.productItems}).filter((item)=>{
            return state.activeFilters.gender.toLowerCase()!==''?
            item.gender.toLowerCase()===state.activeFilters.gender.toLowerCase():state.productItems}).filter((item)=>{
              return state.activeFilters.type.toLowerCase()!==''?
              item.type.toLowerCase()===state.activeFilters.type.toLowerCase():state.productItems});
        return {
          ...state,
          filteredItems:arr()
        }  
      case 'UPDATE_ACTIVE_FILTER' :
          let filterType = action.payload.filterType;
          state.activeFilters[filterType] = action.payload.filter
          return {
            ...state,
          }
      case 'SEARCH_QUERY':
        return {
            ...state,
            searchQuery:action.payload
        }
      default:{
        return state;
      } 
    }
}


const initialState = {
  count:3,
  searchQuery:'',
  productItems:[],
  filteredItems:[],
  cartItems:[],
  activeFilters:{
    color:'',
    gender:'',
    type:''
  }
}

const useGlobalState = () =>{

    const [state, dispatch] = useReducer(appReducer, initialState);
    
    return {state, dispatch};
}

export default useGlobalState;