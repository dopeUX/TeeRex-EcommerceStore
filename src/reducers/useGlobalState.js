import { useReducer, useMemo } from "react";
import combineReducers from "./combineReducers";

const countReducer = (state, action)=>{
    switch(action.type){
  
      case 'INCREMENT':
        return {
            count:state.count++
        }
      case 'DECREMENT':
        return {
            count:state.count--
        }
      default:{
        return state;
      } 
    }
}

const cartReducer = (state, action) =>{
    switch(action.type) {
      case 'Add':
        return {
          state:[]
        }
      default:{
        return state;
      }  
    }
}

const initialState = {
  count:3,
  cartItem:[]
}

const useGlobalState = () =>{
    // const [globalState1, globalDispatch1] = useReducer(countReducer, initialState);
    // const [globalState2, globalDispatch2] = useReducer(countReducer, initialState);
    const rootReducer = combineReducers(countReducer, cartReducer)
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const store = useMemo(() => [state, dispatch], [state]);
    
    return {state, dispatch};
}

export default useGlobalState;