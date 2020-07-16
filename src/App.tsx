import React, { useEffect } from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import Routes from "./Routes"
import { ThemeProvider } from "styled-components"
import Shared from "./pages/shared/Shared"
import { BrowserRouter } from "react-router-dom"
import { observer } from "mobx-react"
import useStore from "store/useStore"

const client = new ApolloClient({
    uri: "https://api.badeev.info/graphql?",
    headers: {
        Authorization: window.localStorage.getItem("token"),
    },
})

const theme = {
    primary: "#407BFF",
}

const App: React.FC = observer(() => {
    const { AuthService } = useStore()

    useEffect(() => {
        AuthService.loadUser()
    }, [AuthService])

    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Shared>
                        <Routes />
                    </Shared>
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    )
})

export default App
