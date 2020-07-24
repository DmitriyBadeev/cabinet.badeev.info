import React from "react"
import NavStore from "./navStore"
import AuthService from "./authService"
import MetrikaService from "./metrikaService"
import EditorService from "./editor/editorService"

const StoreContext = React.createContext({
    NavStore: new NavStore(),
    AuthService: new AuthService(),
    MetrikaService: new MetrikaService(),
    EditorService: new EditorService(),
})

const useStore = () => React.useContext(StoreContext)

export default useStore
