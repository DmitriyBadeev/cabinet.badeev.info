import React from "react"
import NavStore from "./NavStore"

const StoreContext = React.createContext({
    NavStore: new NavStore(),
})

const useStore = () => React.useContext(StoreContext)

export default useStore
