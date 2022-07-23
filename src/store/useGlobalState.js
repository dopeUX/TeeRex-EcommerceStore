import { useReducer } from "react";
import * as constants from '../constants/constants';

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
      case constants.loadProductItems:
        return {
            ...state,
            productItems:action.payload,
            filteredItems:action.payload
        }
      case constants.addItemToCart:
        //state.cartItems.push(action.payload)
        return {
            ...state,
            cartItems:[...state.cartItems, action.payload]
        }
      case constants.deleteItemFromCart:
        
        return {
           ...state,
           cartItems:[...state.cartItems.slice(0, action.payload), ...state.cartItems.slice(action.payload+1)]
        }  
      case constants.updateCartItemQuantity:
        state.cartItems[action.payload.index].productQuantitySet = action.payload.quantity;
        return {
          ...state,
         cartItems:[...state.cartItems]
        }   
      case constants.filterProductItems:
        /// if the filter is set to empty string, its gonna return full products or it will be returning filtered items;
        const arr = (filterType) => state.productItems.filter((item)=>{
             return state.activeFilters.color.toLowerCase()!==''?
           item.color.toLowerCase()===state.activeFilters.color.toLowerCase():state.productItems}).filter((item)=>{
             if(state.activeFilters.price!==0){
               if(state.activeFilters.price==='0 - Rs.250'){
                return item.price<=250;
               }
               else if(state.activeFilters.price==='Rs.251-450'){
                return item.price>=251 && item.price<=450;
               }
               else if(state.activeFilters.price==='Rs.451'){
                return item.price>=451;
              }
             }
             return state.productItems;
           }).filter((item)=>{
            return state.activeFilters.gender.toLowerCase()!==''?
            item.gender.toLowerCase()===state.activeFilters.gender.toLowerCase():state.productItems}).filter((item)=>{
              return state.activeFilters.type.toLowerCase()!==''?
              item.type.toLowerCase()===state.activeFilters.type.toLowerCase():state.productItems});
        return {
          ...state,
          filteredItems:arr()
        }  
      case constants.updateActiveFilter :
          let filterType = action.payload.filterType;
          state.activeFilters[filterType] = action.payload.filter
          return {
            ...state,
          }

      case constants.clearAllFilters :
        state.activeFilters.color = '';
        state.activeFilters.gender = '';
        state.activeFilters.price = 0;
        state.activeFilters.type = '';
        return {
          ...state,
        }
            
      case constants.searchQuery:
        const query = action.payload;
        return {
            ...state,
            searchQuery:query,
            filteredItems:state.productItems.filter(
              (item) =>
                item.name
                  .toLowerCase()
                  .includes(query.toLowerCase()) ||
                item.color
                  .toLowerCase()
                  .includes(query.toLowerCase()) ||
                item.type
                  .toLowerCase()
                  .includes(query.toLowerCase()),
            )
        }
        case constants.updateDialogState:
          return {
            ...state,
            filterDialogStyle:action.payload
          }
      default:{
        return state;
      } 
    }
}


const initialState = {
  count:1,
  searchQuery:'',
  productItems:[],
  filteredItems:[],
  cartItems:[],
  activeFilters:{
    color:'',
    price:0,
    gender:'',
    type:''
  },
  filterDialogStyle:{}
}

const useGlobalState = () =>{

    const [state, dispatch] = useReducer(appReducer, initialState);
    
    return {state, dispatch};
}

export default useGlobalState;