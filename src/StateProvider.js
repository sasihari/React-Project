
import React,{createContext,useContext, useReducer} from 'react'

//preparing the datalayer
//StateContext.Provider--> It allows us to Setup the data layer
// export const useStateValue--> It allows us to Pull the Info from the data layer

export const StateContext =createContext();

export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer (reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue =()=>useContext(StateContext);







