//set up of data layer
//We need this to track the basket
import { createContext, useContext,useReducer } from "react";
// This is Data layer
export const StateContext = createContext();
//Build a provider 
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue = ()=>useContext(StateContext);