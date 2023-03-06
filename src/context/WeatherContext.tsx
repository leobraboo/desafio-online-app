import { createContext } from "react"
import { useWeather } from "../hooks/useWeather" 

interface AuxProps{
  children: JSX.Element[] | JSX.Element
}

const GlobalContext = createContext({})

function GlobalProvider({ children }: AuxProps){
  const { dataWeather, handleCity, handleWeather, loading, infoPoke, namePoke, idPoke} = useWeather()
  return(
    <GlobalContext.Provider value={{ infoPoke , namePoke, dataWeather , handleWeather, loading, handleCity, idPoke}}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }