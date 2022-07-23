import { useReducer } from "react";
import appReducer from "./appReducer";
import initialState from "./initialState";

const useGlobalState = () =>{

    const [state, dispatch] = useReducer(appReducer, initialState);
    
    return {state, dispatch};
}

export default useGlobalState;