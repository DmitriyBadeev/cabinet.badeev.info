import React from "react"
import NavStore from "./NavStore"
import AuthService from "./authService"
import MetrikaService from "./metrikaService"

const StoreContext = React.createContext({
    NavStore: new NavStore(),
    AuthService: new AuthService(),
    MetrikaService: new MetrikaService(),
})

const useStore = () => React.useContext(StoreContext)

export default useStore
