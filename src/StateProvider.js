import React, { createContext, useState } from 'react'

export const StateContext = createContext();

function StateProvider({children}) {
    const [prompt , setPrompt]=useState(null)
  return (
    <StateContext.Provider value={{prompt,setPrompt}}>
        {children}
    </StateContext.Provider>
  )
}

export default StateProvider