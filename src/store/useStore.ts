import React from "react"
import NavStore from "./NavStore"
import AuthService from "./authService"

const StoreContext = React.createContext({
    NavStore: new NavStore(),
    AuthService: new AuthService(),
})

const useStore = () => React.useContext(StoreContext)

export default useStore
