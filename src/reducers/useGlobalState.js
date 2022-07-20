import { useReducer } from "react";

const appReducer = (state, action)=>{
    switch(action.type){
  
      case 'INCREMENT':
        return {
           ...state,
           count:state.count++
        }
      case 'DECREMENT':
        return {
            ...state,
            count:state.count--
        }
      case 'CART_ITEMS':
        return {
            ...state,
            cartItems:state.cartItems.push(action.payload)
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
  cartItems:[]
}

const useGlobalState = () =>{

    const [state, dispatch] = useReducer(appReducer, initialState);
    
    return {state, dispatch};
}

export default useGlobalState;