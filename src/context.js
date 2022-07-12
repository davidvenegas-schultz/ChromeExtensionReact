import { useState, useContext, createContext } from 'react'

export const useFetchITContext = () => useContext(allFetchITContext)
export const allFetchITContext = createContext({})

export const FetchITContextProvider = ({ children }) => {
    const data = [
      {id: 1, name: "AVIMark", url: "https://www.google.com"},
      {id: 2, name: "Cornerstone", url: "https://www.google.com"},
      {id: 3, name: "CovetrusConnect", url: "https://www.google.com"},
      {id: 4, name: "eVetPractice", url: "https://www.google.com"},
      {id: 5, name: "ezyVet", url: "https://apisandbox.usw2.trial.ezyvet.com"},
      {id: 6, name: "Impromed", url: "https://www.google.com"},
      {id: 7, name: "Vetspire", url: "https://www.google.com"}
    ]
    const [search, setSearch] = useState(data)
    const [open, setOpen] = useState(false)
    const [currentPIM, setCurrentPIM] = useState(null)
    const [topOpen, setTopOpen] = useState(true)
    const [connected, setConnected] = useState(false)

    const handleSearch = (e) => setSearch(e.target.value)

    const allFetchITValues = {
      search,
      setSearch,
      open,
      setOpen,
      currentPIM,
      setCurrentPIM,
      handleSearch,
      topOpen,
      setTopOpen,
      connected,
      setConnected
    }

    return (
        <allFetchITContext.Provider value={allFetchITValues}>{children}</allFetchITContext.Provider>
    )
}