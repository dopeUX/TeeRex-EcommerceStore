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
            productItems:action.payload
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
      case 'CART_TOTAL':
        return {
          ...state,
          cartTotal:action.payload
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
  cartItems:[],
}

const useGlobalState = () =>{

    const [state, dispatch] = useReducer(appReducer, initialState);
    
    return {state, dispatch};
}

export default useGlobalState;