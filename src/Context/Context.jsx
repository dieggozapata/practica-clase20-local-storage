import { createContext, useContext, useEffect, useState} from "react";
export const GlobalStates = createContext()
const Context = ({children}) => {    
    const [valorStorage, setValorStorage ] = useState()   
    useEffect(() => {

    },[valorStorage])
  return (
    <GlobalStates.Provider value = {{setValorStorage}}>
        {children}
    </GlobalStates.Provider>
  )
}

export default Context
export const useGlobalStates = () => useContext(GlobalStates)
